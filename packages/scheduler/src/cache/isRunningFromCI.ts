import { isCI } from "@lage-run/cli/lib/isCi.js";

export const isRunningFromCI = process.env.NODE_ENV !== "test" && isCI;
