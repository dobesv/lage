import type { McpSessionManager } from "../McpSessionManager.js";
import path from "path";
import { createTargetGraph } from "../../run/createTargetGraph.js";
import { runnerPickerOptions } from "../../../runnerPickerOptions.js";
import { shouldRun } from "../../shouldRun.js";
import createLogger from "@lage-run/logger";
import type { TargetRunnerPickerOptions } from "@lage-run/runners";

export interface PackageInfoToolInput {
  packageName: string;
}

export interface TaskInfo {
  name: string;
  command: string;
  description?: string;
  dependsOn?: string[];
  cache?: boolean;
}

export interface PackageInfoToolResult {
  name: string;
  path: string;
  tasks: TaskInfo[];
}

export const packageInfoToolDefinition = {
  name: "lage_package_info",
  description: `Get details for a specific package in the monorepo.

Use this tool to find:
- The file system path of a package
- The available lage tasks (targets) for this package.
- NOTE: This tool uses lage's internal graph resolution to return only valid, runnable tasks for the package (e.g. it verifies that 'npmScript' tasks actually exist in package.json).`,
  inputSchema: {
    type: "object" as const,
    properties: {
      packageName: {
        type: "string",
        description: "The name of the package to inspect",
      },
    },
    required: ["packageName"],
  },
};

export async function packageInfoTool(session: McpSessionManager, input: PackageInfoToolInput): Promise<PackageInfoToolResult> {
  const root = session.getRoot();
  const config = await session.getConfig();
  const packageInfos = await session.getPackageInfos();
  const info = packageInfos[input.packageName];

  if (!info) {
    throw new Error(`Package '${input.packageName}' not found in the workspace.`);
  }

  const relativePath = path.relative(root, info.packageJsonPath).replace(/[/\\]package\.json$/, "");
  const logger = createLogger();

  // Setup runner picker to use shouldRun logic
  const taskArgs: string[] = [];
  const pickerOptions: TargetRunnerPickerOptions = {
    ...runnerPickerOptions("", config.npmClient, taskArgs),
    ...config.runners,
  };

  // Generate target graph restricted to this package and all possible pipeline tasks
  // This filters out invalid tasks (e.g. missing scripts) via shouldRun
  const targetGraph = await createTargetGraph({
    logger,
    root,
    dependencies: false,
    dependents: false,
    ignore: [], // Don't ignore files for this check
    pipeline: config.pipeline,
    repoWideChanges: config.repoWideChanges,
    scope: [input.packageName],
    since: undefined, // No change detection needed
    outputs: config.cacheOptions.outputGlob,
    tasks: Object.keys(config.pipeline),
    packageInfos,
    priorities: config.priorities,
    shouldRun: shouldRun(pickerOptions),
  });

  const tasks: TaskInfo[] = [];

  // Filter targets for the requested package
  for (const target of targetGraph.targets.values()) {
    if (target.packageName === input.packageName && !target.hidden) {
      const pipelineDef = config.pipeline[target.task];
      let description: string | undefined;
      let dependsOn: string[] | undefined;
      let cache: boolean | undefined;

      if (pipelineDef) {
        if (Array.isArray(pipelineDef)) {
          dependsOn = pipelineDef;
          cache = true;
        } else {
          description = pipelineDef.description;
          dependsOn = pipelineDef.dependsOn;
          cache = pipelineDef.cache ?? true;
        }
      }

      tasks.push({
        name: target.task,
        command: info.scripts?.[target.task] ?? "", // Command might be empty if it's not a script-runner task
        description,
        dependsOn,
        cache,
      });
    }
  }

  // Sort by name
  tasks.sort((a, b) => a.name.localeCompare(b.name));

  return {
    name: input.packageName,
    path: relativePath || ".",
    tasks,
  };
}
