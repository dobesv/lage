import type { McpSessionManager } from "../McpSessionManager.js";
import { clearCache } from "../../cache/clearCache.js";
import { pruneCache } from "../../cache/pruneCache.js";
import createLogger from "@lage-run/logger";
import path from "path";

export interface CacheToolInput {
  action: "clear" | "prune" | "status";
  pruneDays?: number;
}

export interface CacheToolResult {
  success: boolean;
  message: string;
  cacheLocation?: string;
}

export const cacheToolDefinition = {
  name: "lage_cache",
  description: `Manage the lage build cache.

Before using this tool, call lage_packages first to verify lage is configured. If lage_packages returns empty pipelineTasks, do NOT use this tool.

Actions:
- clear: Delete all cached build results
- prune: Remove cache entries older than a specified number of days
- status: Show cache location and info

Use this tool when:
- Builds are behaving unexpectedly (clear)
- Disk space is running low (prune)
- You need to know where cache is stored (status)`,
  inputSchema: {
    type: "object" as const,
    properties: {
      action: {
        type: "string",
        enum: ["clear", "prune", "status"],
        description: "Cache management action",
      },
      pruneDays: {
        type: "number",
        description: "For prune action: remove entries older than this many days",
      },
    },
    required: ["action"],
  },
};

export async function cacheTool(session: McpSessionManager, input: CacheToolInput): Promise<CacheToolResult> {
  const root = session.getRoot();
  const config = await session.getConfig();
  const logger = createLogger();
  const cacheLocation = path.join(root, config.cacheOptions.internalCacheFolder);

  switch (input.action) {
    case "clear":
      await clearCache({
        cwd: root,
        internalCacheFolder: config.cacheOptions.internalCacheFolder,
        logger,
        concurrency: 1,
      });
      return {
        success: true,
        message: "Cache cleared successfully",
        cacheLocation,
      };

    case "prune": {
      const pruneDays = input.pruneDays ?? 30;
      await pruneCache({
        pruneDays,
        cwd: root,
        internalCacheFolder: config.cacheOptions.internalCacheFolder,
        logger,
        concurrency: 1,
      });
      return {
        success: true,
        message: `Cache pruned (removed entries older than ${pruneDays} days)`,
        cacheLocation,
      };
    }

    case "status":
      return {
        success: true,
        message: "Cache status retrieved",
        cacheLocation,
      };

    default:
      return {
        success: false,
        message: `Unknown action: ${input.action}`,
      };
  }
}
