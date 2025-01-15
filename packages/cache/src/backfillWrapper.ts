/**
 * Backfill wrappers: some functions that uses the `backfill` library that doesn't require them to be inside a class
 */

import * as os from "os";
import { createDefaultConfig, getEnvConfig } from "backfill-config";
import { makeLogger } from "backfill-logger";
import { CacheStorageConfig } from "backfill-config";
import type { Logger as BackfillLogger } from "backfill-logger";
import type { CacheOptions } from "./types/CacheOptions.js";
import { CredentialCache } from "./CredentialCache.js";
import { BackfillCacheProviderOptions } from "./providers/BackfillCacheProvider.js";

export function createBackfillLogger(): BackfillLogger {
  const stdout = process.stdout;
  const stderr = process.stderr;
  return makeLogger("error", {
    console: {
      info(...args) {
        stdout.write(args.join(" ") + os.EOL);
      },
      warn(...args) {
        stderr.write(args.join(" ") + os.EOL);
      },
      error(...args) {
        stderr.write(args.join(" ") + os.EOL);
      },
    },
  });
}

export function createBackfillCacheConfig(
  cwd: string,
  cacheOptions: Partial<CacheOptions> = {},
  backfillLogger: BackfillLogger
): CacheOptions {
  const envConfig = getEnvConfig(backfillLogger);
  const mergedConfig = {
    ...createDefaultConfig(cwd),
    ...cacheOptions,
    ...envConfig,
  };

  if (mergedConfig.cacheStorageConfig.provider === "azure-blob") {
    if (
      mergedConfig.cacheStorageConfig.options.connectionString &&
      !isTokenConnectionString(mergedConfig.cacheStorageConfig.options.connectionString)
    ) {
      mergedConfig.cacheStorageConfig.options.credential = CredentialCache.getInstance();
    }
  }

  return mergedConfig;
}

function isTokenConnectionString(connectionString: string) {
  return connectionString.includes("SharedAccessSignature");
}
