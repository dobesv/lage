import type { TargetStatus } from "@lage-run/scheduler-types";

export function parseNdJson(ndjson: string) {
  const entries = ndjson.substr(ndjson.indexOf("{"));
  return entries
    .split("\n")
    .map((line) => {
      try {
        return JSON.parse(line);
      } catch (e) {
        return {};
      }
    })
    .filter((entry) => Object.keys(entry).length > 0);
}

export function filterEntry(data: any, pkg: string, task: string, status: TargetStatus) {
  return data?.target?.packageName === pkg && data?.target?.task === task && data.status === status;
}
