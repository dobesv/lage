import type { McpSessionManager } from "../McpSessionManager.js";

export type PipelineToolInput = Record<string, never>;

export interface PipelineTaskInfo {
  name: string;
  description?: string;
  dependsOn: string[];
  cache: boolean;
}

export interface PipelineToolResult {
  pipelineTasks: PipelineTaskInfo[];
  error?: string;
}

export const pipelineToolDefinition = {
  name: "lage_pipeline",
  description: `Get the global lage pipeline configuration.

Use this tool to understand the available task types and their default configurations (dependencies, caching, descriptions).`,
  inputSchema: {
    type: "object" as const,
    properties: {},
    required: [],
  },
};

export async function pipelineTool(session: McpSessionManager, _input: PipelineToolInput): Promise<PipelineToolResult> {
  // Check if lage is configured
  if (!session.isConfigured) {
    return {
      pipelineTasks: [],
      error: session.configError ?? "Lage is not configured in this workspace.",
    };
  }

  const config = await session.getConfig();

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
    pipelineTasks,
  };
}
