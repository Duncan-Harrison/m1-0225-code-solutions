/* exported defaults */
function defaults(
  target: Record<string, unknown>,
  source: Record<string, unknown>
): void {
  for (const key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
}
