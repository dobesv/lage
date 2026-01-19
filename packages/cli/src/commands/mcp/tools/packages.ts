import type { McpSessionManager } from "../McpSessionManager.js";

export type PackagesToolInput = Record<string, never>;

export interface PackagesToolResult {
  packages: string[];
  count: number;
  /** Pipeline tasks defined in lage.config.js. Empty if lage is not configured. */
  pipelineTasks: string[];
  /** Error message if lage is not configured */
  error?: string;
}

export const packagesToolDefinition = {
  name: "lage_packages",
  description: `List all package names in the monorepo workspace.

Call this tool FIRST to discover available package names in the workspace.

Returns:
- A list of all package names in the workspace
- The total count of packages

Use this tool to:
- Discover available package names for scoping
- Verify that you are working in a recognized monorepo

To get detailed information about a specific package (path, tasks), use 'lage_package_info'.
To see the global pipeline configuration, use 'lage_pipeline'.`,
  inputSchema: {
    type: "object" as const,
    properties: {},
    required: [],
  },
};

export async function packagesTool(session: McpSessionManager, _input: PackagesToolInput): Promise<PackagesToolResult> {
  // Check if lage is configured
  if (!session.isConfigured) {
    return {
      packages: [],
      count: 0,
      pipelineTasks: [],
      error: session.configError ?? "Lage is not configured in this workspace.",
    };
  }

  const packageInfos = await session.getPackageInfos();
  const config = await session.getConfig();
  const packages = Object.keys(packageInfos).sort();
  const pipelineTasks = Object.keys(config.pipeline).sort();

  return {
    packages,
    count: packages.length,
    pipelineTasks,
  };
}
