import { hrToSeconds } from "@lage-run/format-hrtime";
import { LogLevel, type Reporter, type LogEntry } from "@lage-run/logger";
import type { SchedulerRunSummary, TargetStatus, TargetRun } from "@lage-run/scheduler-types";

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
  success: boolean;
  duration: number;
  summary: {
    total: number;
    success: number;
    failed: number;
    skipped: number;
    aborted: number;
    pending: number;
  };
  targets: TargetLogEntry[];
  failedTargets: FailedTargetEntry[];
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

/**
 * McpReporter captures log entries and target results for MCP tool responses
 * instead of writing them to console output.
 */
export class McpReporter implements Reporter {
  private logEntries = new Map<string, LogEntry[]>();
  private targetStatuses = new Map<string, TargetLogEntry>();
  private runResult: McpRunResult | null = null;

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
      }
    }
  }

  summarize(summary: SchedulerRunSummary<WorkerResult>) {
    const { targetRuns, targetRunByStatus, duration, results } = summary;
    const { failed, aborted, skipped, success, pending } = targetRunByStatus;

    const targets: TargetLogEntry[] = [];
    const failedTargets: FailedTargetEntry[] = [];

    for (const [id, targetRun] of targetRuns) {
      const target = targetRun.target;
      if (target.hidden) {
        continue;
      }

      const durationSecs = targetRun.duration ? hrToNumber(targetRun.duration) : 0;
      const cached = targetRun.status === "skipped";

      targets.push({
        id,
        package: target.packageName ?? "",
        task: target.task,
        status: targetRun.status,
        cached,
        duration: durationSecs,
      });

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

    this.runResult = {
      success: results === "success",
      duration: hrToNumber(duration),
      summary: {
        total: targetRuns.size,
        success: success.length,
        failed: failed.length,
        skipped: skipped.length,
        aborted: aborted.length,
        pending: pending.length,
      },
      targets,
      failedTargets,
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
  }

  /**
   * Optional cleanup method
   */
  cleanup() {
    // No-op for MCP reporter
  }
}
