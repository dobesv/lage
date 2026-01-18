import { Command } from "commander";
import { mcpAction } from "./action.js";

const command = new Command("mcp");

command.description("Start an MCP (Model Context Protocol) server for AI coding assistants");
command.action(mcpAction);

export { command as mcpCommand };
