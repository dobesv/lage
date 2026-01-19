import type { TargetRunnerPickerOptions } from "@lage-run/runners";

export interface RunnerPickerOptionsConfig {
  nodeArg?: string;
  npmCmd: string;
  taskArgs: string[];
  /** When true, disables color output in spawned processes */
  noColor?: boolean;
}

export function runnerPickerOptions(
  nodeArg: string | undefined,
  npmCmd: string,
  taskArgs: string[],
  noColor?: boolean
): TargetRunnerPickerOptions {
  return {
    npmScript: {
      script: require.resolve("./runners/NpmScriptRunner.js"),
      options: {
        nodeArg,
        taskArgs,
        npmCmd,
        noColor,
      },
    },
    worker: {
      script: require.resolve("./runners/WorkerRunner.js"),
      options: {
        taskArgs,
      },
    },
    noop: {
      script: require.resolve("./runners/NoOpRunner.js"),
      options: {},
    },
  };
}
