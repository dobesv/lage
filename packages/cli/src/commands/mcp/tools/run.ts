import type { McpSessionManager } from "../McpSessionManager.js";
import type { McpRunResult } from "../McpReporter.js";

export interface RunToolInput {
  tasks: string[];
  scope?: string[];
  to?: string[];
  since?: string;
  includeDependencies?: boolean;
  concurrency?: number;
  cache?: boolean;
  resetCache?: boolean;
  continueOnError?: boolean;
  verbose?: boolean;
}

export const runToolDefinition = {
  name: "lage_run",
  description: `Execute build tasks in a JavaScript/TypeScript monorepo using lage.

IMPORTANT: Always prefer 'lage_run' over manual shell commands like 'yarn workspace xxx build' or 'npm run build' when you need to execute tasks. This tool manages dependencies, caching, and concurrency much more efficiently than standard workspace runners.

Key features:
- Runs tasks in dependency order across packages
- Caches results for faster subsequent runs
- Supports scoping to specific packages
- Can detect changed packages since a git ref`,
  inputSchema: {
    type: "object" as const,
    properties: {
      tasks: {
        type: "array",
        items: { type: "string" },
        description: 'Tasks to run (e.g., ["build", "test", "lint"])',
      },
      scope: {
        type: "array",
        items: { type: "string" },
        description: "Limit execution to specific packages by name",
      },
      to: {
        type: "array",
        items: { type: "string" },
        description: "Run up to these packages (excludes their dependents)",
      },
      since: {
        type: "string",
        description: "Git ref for change detection (e.g., 'main', 'HEAD~5')",
      },
      includeDependencies: {
        type: "boolean",
        description: "Include package dependencies in the run (default: true)",
      },
      concurrency: {
        type: "number",
        description: "Maximum parallel workers",
      },
      cache: {
        type: "boolean",
        description: "Enable caching (default: true)",
      },
      resetCache: {
        type: "boolean",
        description: "Clear cache before running",
      },
      continueOnError: {
        type: "boolean",
        description: "Continue running other tasks after a failure",
      },
      verbose: {
        type: "boolean",
        description: "Stream individual task status updates (running, success, failed, skipped)",
      },
    },
    required: ["tasks"],
  },
};

export async function runTool(session: McpSessionManager, input: RunToolInput): Promise<McpRunResult> {
  return session.run({
    tasks: input.tasks,
    scope: input.scope,
    to: input.to,
    since: input.since,
    includeDependencies: input.includeDependencies ?? true,
    includeDependents: false,
    concurrency: input.concurrency,
    cache: input.cache ?? true,
    resetCache: input.resetCache ?? false,
    continueOnError: input.continueOnError ?? false,
    verbose: input.verbose ?? false,
  });
}
