/* exported includesSeven */
function includesSeven(array: unknown[]): boolean {
  for (const a of array) {
    if (a === 7) {
      return true;
    }
  }
  return false;
}
