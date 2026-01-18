import type { McpSessionManager } from "../McpSessionManager.js";
import { getFilteredPackages } from "../../../filter/getFilteredPackages.js";
import createLogger from "@lage-run/logger";

export interface AffectedToolInput {
  since?: string;
  scope?: string[];
}

export interface AffectedToolResult {
  packages: string[];
  count: number;
}

export const affectedToolDefinition = {
  name: "lage_affected",
  description: `Show packages affected by changes since a git ref.

Before using this tool, call lage_packages first to verify lage is configured. If lage_packages returns empty pipelineTasks, do NOT use this tool.

Use this tool to understand which packages have changed and need to be rebuilt or tested.

Common use cases:
- See what changed since main branch (since: "main")
- See what changed in the last N commits (since: "HEAD~5")
- See what changed in a specific commit (since: "abc123")`,
  inputSchema: {
    type: "object" as const,
    properties: {
      since: {
        type: "string",
        description: "Git ref to compare against (e.g., 'main', 'HEAD~5'). Defaults to the default remote branch.",
      },
      scope: {
        type: "array",
        items: { type: "string" },
        description: "Starting scope to filter from",
      },
    },
    required: [],
  },
};

export async function affectedTool(session: McpSessionManager, input: AffectedToolInput): Promise<AffectedToolResult> {
  const root = session.getRoot();
  const config = await session.getConfig();
  const packageInfos = await session.getPackageInfos();
  const logger = createLogger();

  const packages = getFilteredPackages({
    root,
    logger,
    packageInfos,
    includeDependencies: true,
    includeDependents: true,
    since: input.since,
    scope: input.scope,
    repoWideChanges: config.repoWideChanges,
    sinceIgnoreGlobs: config.ignore,
  });

  return {
    packages,
    count: packages.length,
  };
}
