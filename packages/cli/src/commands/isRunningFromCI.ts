import { isCI } from "../isCi.js";

export const isRunningFromCI = process.env.NODE_ENV !== "test" && isCI;
