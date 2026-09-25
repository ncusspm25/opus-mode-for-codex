export function loadConfig(env) {
  return { exportEnabled: env.EXPORT_ENABLED === 'true' };
}
