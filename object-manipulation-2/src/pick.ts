/* exported pick */
function pick(
  source: Record<string, unknown>,
  keys: string[]
): Record<string, unknown> {
  const o: Record<string, unknown> = {};
  for (const key of keys) {
    if (source[key] !== undefined) {
      o[key] = source[key];
    }
  }
  return o;
}
