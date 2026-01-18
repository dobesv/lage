import { getConfig, getMaxWorkersPerTask, getConcurrency, type ConfigOptions } from "@lage-run/config";
import { getPackageInfosAsync, getWorkspaceRoot, type PackageInfos } from "workspace-tools";
import { SimpleScheduler } from "@lage-run/scheduler";
import createLogger, { type Logger } from "@lage-run/logger";
import { createTargetGraph } from "../run/createTargetGraph.js";
import { filterPipelineDefinitions } from "../run/filterPipelineDefinitions.js";
import { createCache } from "../../cache/createCacheProvider.js";
import { runnerPickerOptions } from "../../runnerPickerOptions.js";
import { optimizeTargetGraph } from "../../optimizeTargetGraph.js";
import { shouldRun } from "../shouldRun.js";
import { McpReporter, type McpRunResult } from "./McpReporter.js";
import type { TargetGraph } from "@lage-run/target-graph";
import type { TargetRunnerPickerOptions } from "@lage-run/runners";
import type { TargetHasher } from "@lage-run/hasher";

export interface RunOptions {
  tasks: string[];
  scope?: string[];
  to?: string[];
  since?: string;
  includeDependencies?: boolean;
  includeDependents?: boolean;
  concurrency?: number;
  cache?: boolean;
  resetCache?: boolean;
  continueOnError?: boolean;
}

export interface McpSessionManagerOptions {
  cwd: string;
}

/**
 * McpSessionManager manages persistent state across MCP tool calls.
 *
 * Key responsibilities:
 * - Cache packageInfos (expensive to compute)
 * - Manage scheduler and worker pool lifecycle
 * - Handle run cancellation for concurrent requests
 * - Reload config when needed
 */
export class McpSessionManager {
  private cwd: string;
  private root: string | null = null;
  private config: ConfigOptions | null = null;
  private packageInfos: PackageInfos | null = null;
  private scheduler: SimpleScheduler | null = null;
  private hasher: TargetHasher | null = null;
  private logger: Logger;
  private reporter: McpReporter;
  private currentAbortController: AbortController | null = null;
  private isRunning = false;

  constructor(options: McpSessionManagerOptions) {
    this.cwd = options.cwd;
    this.logger = createLogger();
    this.reporter = new McpReporter();
    this.logger.addReporter(this.reporter);
  }

  /**
   * Initialize or reload configuration and package info
   */
  async initialize(): Promise<void> {
    this.root = getWorkspaceRoot(this.cwd) ?? this.cwd;
    this.config = await getConfig(this.cwd);
    this.packageInfos = await getPackageInfosAsync(this.root);
  }

  /**
   * Ensure the session is initialized
   */
  private async ensureInitialized(): Promise<{ root: string; config: ConfigOptions; packageInfos: PackageInfos }> {
    if (!this.root || !this.config || !this.packageInfos) {
      await this.initialize();
    }
    return {
      root: this.root!,
      config: this.config!,
      packageInfos: this.packageInfos!,
    };
  }

  /**
   * Get the workspace root
   */
  getRoot(): string {
    return this.root ?? this.cwd;
  }

  /**
   * Get the config
   */
  async getConfig(): Promise<ConfigOptions> {
    const { config } = await this.ensureInitialized();
    return config;
  }

  /**
   * Get package infos
   */
  async getPackageInfos(): Promise<PackageInfos> {
    const { packageInfos } = await this.ensureInitialized();
    return packageInfos;
  }

  /**
   * Cancel any currently running task
   */
  cancelCurrentRun(): void {
    if (this.currentAbortController && this.isRunning) {
      this.currentAbortController.abort();
      this.currentAbortController = null;
    }
  }

  /**
   * Run tasks with the given options
   */
  async run(options: RunOptions): Promise<McpRunResult> {
    // Cancel any existing run
    this.cancelCurrentRun();

    const { root, config, packageInfos } = await this.ensureInitialized();

    // Reset reporter for new run
    this.reporter.reset();

    // Create new abort controller for this run
    this.currentAbortController = new AbortController();
    this.isRunning = true;

    try {
      const concurrency = getConcurrency(options.concurrency, config.concurrency);
      const taskArgs: string[] = [];

      const pickerOptions: TargetRunnerPickerOptions = {
        ...runnerPickerOptions("", config.npmClient, taskArgs),
        ...config.runners,
      };

      const targetGraph = await createTargetGraph({
        logger: this.logger,
        root,
        dependencies: options.includeDependencies ?? true,
        dependents: options.includeDependents ?? false,
        ignore: config.ignore,
        pipeline: config.pipeline,
        repoWideChanges: config.repoWideChanges,
        scope: [...(options.scope ?? []), ...(options.to ?? [])],
        since: options.since,
        outputs: config.cacheOptions.outputGlob,
        tasks: options.tasks,
        packageInfos,
        priorities: config.priorities,
        shouldRun: shouldRun(pickerOptions),
      });

      const filteredPipeline = filterPipelineDefinitions(targetGraph.targets.values(), config.pipeline);

      // Create or reuse hasher
      if (!this.hasher) {
        const cacheResult = await createCache({
          root,
          logger: this.logger,
          cacheOptions: config.cacheOptions,
          cliArgs: taskArgs,
          skipLocalCache: false,
        });
        this.hasher = cacheResult.hasher;
      }

      // Create scheduler (we create a new one each time to handle abort properly)
      // In the future we could optimize by reusing the pool
      const scheduler = new SimpleScheduler({
        logger: this.logger,
        concurrency,
        continueOnError: options.continueOnError ?? false,
        shouldCache: options.cache ?? true,
        shouldResetCache: options.resetCache ?? false,
        workerData: {
          root,
          taskArgs,
          skipLocalCache: false,
          cacheOptions: config.cacheOptions,
          runners: pickerOptions,
        },
        maxWorkersPerTask: new Map([...getMaxWorkersPerTask(filteredPipeline, concurrency)]),
        hasher: this.hasher,
        workerIdleMemoryLimit: config.workerIdleMemoryLimit,
      });

      // Replace abort controller
      scheduler.abortController = this.currentAbortController;
      scheduler.abortSignal = this.currentAbortController.signal;

      const optimizedTargets = await optimizeTargetGraph(targetGraph, scheduler.runnerPicker, false);
      const optimizedGraph: TargetGraph = {
        targets: new Map(optimizedTargets.map((target) => [target.id, target])),
      };

      const summary = await scheduler.run(root, optimizedGraph);
      await scheduler.cleanup();

      // Call summarize to populate the result
      this.reporter.summarize(summary);

      // Get result from reporter
      const result = this.reporter.getResult();
      if (!result) {
        return {
          success: false,
          duration: 0,
          summary: { total: 0, success: 0, failed: 0, skipped: 0, aborted: 0, pending: 0 },
          targets: [],
          failedTargets: [],
        };
      }

      return result;
    } finally {
      this.isRunning = false;
      this.currentAbortController = null;
    }
  }

  /**
   * Cleanup resources
   */
  async cleanup(): Promise<void> {
    this.cancelCurrentRun();
    if (this.scheduler) {
      await this.scheduler.cleanup();
      this.scheduler = null;
    }
    if (this.hasher) {
      await this.hasher.cleanup();
      this.hasher = null;
    }
  }
}
