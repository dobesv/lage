import type { McpSessionManager } from "../McpSessionManager.js";
import path from "path";

export type PackagesToolInput = Record<string, never>;

export interface PackageInfo {
  name: string;
  path: string;
  scripts: string[];
}

export interface PipelineTaskInfo {
  name: string;
  description?: string;
  dependsOn: string[];
  cache: boolean;
}

export interface PackagesToolResult {
  packages: PackageInfo[];
  count: number;
  pipelineTasks: PipelineTaskInfo[];
}

export const packagesToolDefinition = {
  name: "lage_packages",
  description: `List all packages in the monorepo workspace and available pipeline tasks.

Call this tool FIRST before using other lage tools to verify lage is configured for this project. If pipelineTasks is empty, the project does not use lage - use a different build approach.

Returns:
- All packages with their names, paths, and available npm scripts
- Pipeline tasks defined in lage.config.js/cjs with their dependencies and descriptions

Use this tool to:
- Check if a project uses lage (non-empty pipelineTasks means yes)
- Understand what packages exist in the monorepo
- See what tasks can be run on each package
- Understand how tasks are configured in the pipeline`,
  inputSchema: {
    type: "object" as const,
    properties: {},
    required: [],
  },
};

export async function packagesTool(session: McpSessionManager, _input: PackagesToolInput): Promise<PackagesToolResult> {
  const root = session.getRoot();
  const config = await session.getConfig();
  const packageInfos = await session.getPackageInfos();

  const packages: PackageInfo[] = [];

  for (const [name, info] of Object.entries(packageInfos)) {
    const relativePath = path.relative(root, info.packageJsonPath).replace(/[/\\]package\.json$/, "");
    packages.push({
      name,
      path: relativePath || ".",
      scripts: Object.keys(info.scripts ?? {}),
    });
  }

  // Sort packages by name
  packages.sort((a, b) => a.name.localeCompare(b.name));

  // Extract pipeline tasks with descriptions
  const pipelineTasks: PipelineTaskInfo[] = [];
  for (const [id, definition] of Object.entries(config.pipeline)) {
    if (Array.isArray(definition)) {
      pipelineTasks.push({
        name: id,
        dependsOn: definition,
        cache: true,
      });
    } else {
      pipelineTasks.push({
        name: id,
        description: definition.description,
        dependsOn: definition.dependsOn ?? [],
        cache: definition.cache ?? true,
      });
    }
  }

  return {
    packages,
    count: packages.length,
    pipelineTasks,
  };
}
