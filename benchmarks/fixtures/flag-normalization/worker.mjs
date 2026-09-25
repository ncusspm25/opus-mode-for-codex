import { parseFlag } from './flags.mjs';

export function shouldEnqueueExport(env) {
  return parseFlag(env.EXPORT_ENABLED);
}
