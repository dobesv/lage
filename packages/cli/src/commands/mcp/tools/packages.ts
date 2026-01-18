import type { McpSessionManager } from "../McpSessionManager.js";

export type PackagesToolInput = Record<string, never>;

export interface PackagesToolResult {
  packages: string[];
  count: number;
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
  const packageInfos = await session.getPackageInfos();
  const packages = Object.keys(packageInfos).sort();

  return {
    packages,
    count: packages.length,
  };
}
