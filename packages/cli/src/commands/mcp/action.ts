import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { McpSessionManager } from "./McpSessionManager.js";
import { runTool, runToolDefinition } from "./tools/run.js";
import { infoTool, infoToolDefinition } from "./tools/info.js";
import { affectedTool, affectedToolDefinition } from "./tools/affected.js";
import { cacheTool, cacheToolDefinition } from "./tools/cache.js";
import { packagesTool, packagesToolDefinition } from "./tools/packages.js";

export async function mcpAction() {
  const cwd = process.cwd();
  const session = new McpSessionManager({ cwd });

  // Initialize session eagerly
  await session.initialize();

  const server = new Server(
    {
      name: "lage",
      version: "1.0.0",
    },
    {
      capabilities: {
        tools: {},
        logging: {},
      },
    }
  );

  session.setOnProgress((message) => {
    server.sendLoggingMessage({
      level: "info",
      data: message,
    });
  });

  // Register tool list handler
  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools: [runToolDefinition, infoToolDefinition, affectedToolDefinition, cacheToolDefinition, packagesToolDefinition],
    };
  });

  // Register tool call handler
  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    try {
      let result: unknown;

      switch (name) {
        case "lage_run":
          result = await runTool(session, args as any);
          break;
        case "lage_info":
          result = await infoTool(session, args as any);
          break;
        case "lage_affected":
          result = await affectedTool(session, args as any);
          break;
        case "lage_cache":
          result = await cacheTool(session, args as any);
          break;
        case "lage_packages":
          result = await packagesTool(session, args as any);
          break;
        default:
          return {
            content: [
              {
                type: "text",
                text: JSON.stringify({ error: `Unknown tool: ${name}` }),
              },
            ],
            isError: true,
          };
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ error: errorMessage }),
          },
        ],
        isError: true,
      };
    }
  });

  // Setup graceful shutdown
  const cleanup = async () => {
    await session.cleanup();
    process.exit(0);
  };

  process.on("SIGINT", cleanup);
  process.on("SIGTERM", cleanup);

  // Connect to stdio transport
  const transport = new StdioServerTransport();
  await server.connect(transport);
}
