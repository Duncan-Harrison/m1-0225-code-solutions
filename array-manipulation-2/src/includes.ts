/* exported includes */
function includes(array: unknown[], value: unknown): boolean {
  for (const e of array) {
    if (e === value) {
      return true;
    }
  }
  return false;
}
