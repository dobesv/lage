import path from "path";
import { getStartTargetId } from "@lage-run/target-graph";
import type { Target } from "@lage-run/target-graph";
import type { TargetRunner } from "./types/TargetRunner.js";
import type { TargetRunnerPickerOptions } from "./types/TargetRunnerPickerOptions.js";
import { pathToFileURL } from "url";

export class TargetRunnerPicker {
  constructor(private options: TargetRunnerPickerOptions) {}

  async pick(target: Target): Promise<TargetRunner> {
    if (target.id === getStartTargetId()) {
      return new (await import("./NoOpRunner.js")).NoOpRunner();
    }

    if (!target.type) {
      target.type = "npmScript";
    }

    if (this.options[target.type]) {
      const config = this.options[target.type];
      const { script, options } = config;

      let importScript = script;

      if (!importScript.startsWith("file://")) {
        importScript = pathToFileURL(importScript).toString();
      }

      const runnerModule = await import(importScript);

      const base = path.basename(script);
      const runnerName = base.replace(path.extname(base), "");

      const runner =
        typeof runnerModule[runnerName] === "function"
          ? runnerModule[runnerName]
          : typeof runnerModule.default === "function"
          ? runnerModule.default
          : typeof runnerModule.default[runnerName] === "function"
          ? runnerModule.default[runnerName]
          : runnerModule;

      return new runner(options);
    }

    throw new Error(`No runner found for target ${target.id}`);
  }
}
