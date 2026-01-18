import type { McpSessionManager } from "../McpSessionManager.js";
import { createTargetGraph } from "../../run/createTargetGraph.js";
import { runnerPickerOptions } from "../../../runnerPickerOptions.js";
import { shouldRun } from "../../shouldRun.js";
import createLogger from "@lage-run/logger";
import type { TargetRunnerPickerOptions } from "@lage-run/runners";

export interface InfoToolInput {
  tasks: string[];
  scope?: string[];
  to?: string[];
  since?: string;
  includeDependencies?: boolean;
}

export interface InfoToolResult {
  packages: string[];
  totalTargets: number;
  targets: Array<{
    id: string;
    package: string;
    task: string;
    dependencies: string[];
  }>;
}

export const infoToolDefinition = {
  name: "lage_info",
  description: `Show the task dependency graph without executing any tasks.

Before using this tool, call lage_packages first to verify lage is configured. If lage_packages returns empty pipelineTasks, do NOT use this tool.

Use this tool to understand:
- What tasks would run for a given command
- The dependency order between tasks
- Which packages are affected

This is useful before running tasks to preview what will happen.`,
  inputSchema: {
    type: "object" as const,
    properties: {
      tasks: {
        type: "array",
        items: { type: "string" },
        description: 'Tasks to analyze (e.g., ["build", "test"])',
      },
      scope: {
        type: "array",
        items: { type: "string" },
        description: "Limit to specific packages",
      },
      to: {
        type: "array",
        items: { type: "string" },
        description: "Run up to these packages",
      },
      since: {
        type: "string",
        description: "Git ref for change detection",
      },
      includeDependencies: {
        type: "boolean",
        description: "Include package dependencies (default: true)",
      },
    },
    required: ["tasks"],
  },
};

export async function infoTool(session: McpSessionManager, input: InfoToolInput): Promise<InfoToolResult> {
  const root = session.getRoot();
  const config = await session.getConfig();
  const packageInfos = await session.getPackageInfos();
  const logger = createLogger();

  const taskArgs: string[] = [];
  const pickerOptions: TargetRunnerPickerOptions = {
    ...runnerPickerOptions("", config.npmClient, taskArgs),
    ...config.runners,
  };

  const targetGraph = await createTargetGraph({
    logger,
    root,
    dependencies: input.includeDependencies ?? true,
    dependents: false,
    ignore: config.ignore,
    pipeline: config.pipeline,
    repoWideChanges: config.repoWideChanges,
    scope: [...(input.scope ?? []), ...(input.to ?? [])],
    since: input.since,
    outputs: config.cacheOptions.outputGlob,
    tasks: input.tasks,
    packageInfos,
    priorities: config.priorities,
    shouldRun: shouldRun(pickerOptions),
  });

  const packages = new Set<string>();
  const targets: InfoToolResult["targets"] = [];

  for (const [id, target] of targetGraph.targets) {
    if (target.hidden) continue;

    if (target.packageName) {
      packages.add(target.packageName);
    }

    targets.push({
      id,
      package: target.packageName ?? "",
      task: target.task,
      dependencies: target.dependencies,
    });
  }

  return {
    packages: Array.from(packages),
    totalTargets: targets.length,
    targets,
  };
}
