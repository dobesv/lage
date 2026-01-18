import { hrToSeconds } from "@lage-run/format-hrtime";
import { LogLevel, type Reporter, type LogEntry } from "@lage-run/logger";
import type { SchedulerRunSummary, TargetStatus, TargetRun } from "@lage-run/scheduler-types";

function formatBytes(bytes: number) {
  const sizes = ["B", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 B";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
}

/**
 * Worker result type - matches the structure from @lage-run/scheduler
 */
interface WorkerResult {
  stdoutBuffer: string;
  stderrBuffer: string;
  skipped: boolean;
  hash: string;
  value: unknown;
  id: string;
}

export interface TargetLogEntry {
  id: string;
  package: string;
  task: string;
  status: TargetStatus;
  cached: boolean;
  duration: number;
  error?: string;
}

export interface FailedTargetEntry {
  id: string;
  package: string;
  task: string;
  stdout: string;
  stderr: string;
  error: string;
}

export interface McpRunResult {
  message: string;
  success: boolean;
  failedTargets?: FailedTargetEntry[];
}

interface TargetStatusEntry {
  target: {
    id: string;
    packageName?: string;
    task: string;
    hidden?: boolean;
  };
  status: TargetStatus;
  duration?: [number, number];
  hash?: string;
}

function isTargetStatusLogEntry(data: any): data is TargetStatusEntry {
  return data && data.target && typeof data.status === "string";
}

function hrToNumber(hrtime: [number, number]): number {
  return parseFloat(hrToSeconds(hrtime));
}

export interface McpReporterOptions {
  verbose?: boolean;
  onLog?: (message: string) => void;
  totalTargets?: number;
}

/**
 * McpReporter captures log entries and target results for MCP tool responses
 * instead of writing them to console output.
 */
export class McpReporter implements Reporter {
  private logEntries = new Map<string, LogEntry[]>();
  private targetStatuses = new Map<string, TargetLogEntry>();
  private runResult: McpRunResult | null = null;
  private options: McpReporterOptions = {};

  setOptions(options: McpReporterOptions) {
    this.options = { ...this.options, ...options };
  }

  log(entry: LogEntry<any>) {
    // if "hidden", do not record the entry
    if (entry?.data?.target?.hidden) {
      return;
    }

    // Save the logs for tracking
    if (entry.data?.target?.id) {
      const targetId = entry.data.target.id;
      if (!this.logEntries.has(targetId)) {
        this.logEntries.set(targetId, []);
      }
      this.logEntries.get(targetId)!.push(entry);

      // Track status changes
      if (isTargetStatusLogEntry(entry.data)) {
        const { target, status, duration, hash } = entry.data;
        const cached = status === "skipped" && !!hash;

        this.targetStatuses.set(targetId, {
          id: targetId,
          package: target.packageName ?? "",
          task: target.task,
          status,
          cached,
          duration: duration ? hrToNumber(duration) : 0,
        });

        if (this.options.verbose && this.options.onLog) {
          const pkg = target.packageName ?? "unknown";
          if (["running", "success", "failed", "skipped"].includes(status)) {
            this.options.onLog(`[${pkg} ${target.task}] ${status}`);
          }
        }
      }
    }
  }

  getStatusLine(): string {
    let success = 0;
    let failed = 0;
    let skipped = 0;
    let running = 0;

    for (const status of this.targetStatuses.values()) {
      switch (status.status) {
        case "success":
          success++;
          break;
        case "failed":
          failed++;
          break;
        case "skipped":
          skipped++;
          break;
        case "running":
          running++;
          break;
      }
    }

    const completed = success + failed + skipped;
    const total = this.options.totalTargets ?? 0;
    const pending = Math.max(0, total - completed - running);

    const mem = process.memoryUsage();
    const memStr = `RSS: ${formatBytes(mem.rss)} | Heap: ${formatBytes(mem.heapUsed)}`;

    return `Progress: ${completed}/${total} (Success: ${success}, Failed: ${failed}, Skipped: ${skipped}, Running: ${running}, Pending: ${pending}) | ${memStr}`;
  }

  summarize(summary: SchedulerRunSummary<WorkerResult>) {
    const { targetRuns, targetRunByStatus, duration, results } = summary;
    const { failed, success, skipped } = targetRunByStatus;

    const failedTargets: FailedTargetEntry[] = [];

    for (const [id, targetRun] of targetRuns) {
      const target = targetRun.target;
      if (target.hidden) {
        continue;
      }

      // Collect failed target details
      if (targetRun.status === "failed") {
        const result = (targetRun as TargetRun<WorkerResult>).result;
        failedTargets.push({
          id,
          package: target.packageName ?? "",
          task: target.task,
          stdout: result?.stdoutBuffer ?? "",
          stderr: result?.stderrBuffer ?? "",
          error: this.getErrorFromLogs(id),
        });
      }
    }

    const durationSecs = hrToNumber(duration);
    const mem = process.memoryUsage();
    const memStr = `RSS: ${formatBytes(mem.rss)} | Heap: ${formatBytes(mem.heapUsed)}`;
    let message = `Build ${results === "success" ? "succeeded" : "failed"} in ${durationSecs.toFixed(2)}s. (${memStr})`;
    message += `\nSuccess: ${success.length}, Failed: ${failed.length}, Skipped: ${skipped.length}`;

    if (failedTargets.length > 0) {
      message += `\n\nFailed targets:\n`;
      failedTargets.forEach((t) => {
        message += `- ${t.package} ${t.task}: ${t.error || "Check stdout/stderr"}\n`;
      });
    }

    this.runResult = {
      message,
      success: results === "success",
      failedTargets: failedTargets.length > 0 ? failedTargets : undefined,
    };
  }

  private getErrorFromLogs(targetId: string): string {
    const logs = this.logEntries.get(targetId) ?? [];
    const errorLogs = logs.filter((entry) => entry.level === LogLevel.error || entry.msg?.toLowerCase().includes("error"));
    return errorLogs.map((e) => e.msg).join("\n");
  }

  /**
   * Get the structured result for MCP response
   */
  getResult(): McpRunResult | null {
    return this.runResult;
  }

  /**
   * Reset the reporter state for a new run
   */
  reset() {
    this.logEntries.clear();
    this.targetStatuses.clear();
    this.runResult = null;
    this.options = {};
  }

  /**
   * Optional cleanup method
   */
  cleanup() {
    // No-op for MCP reporter
  }
}
