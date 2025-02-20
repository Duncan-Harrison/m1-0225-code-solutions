/* exported swapChars */
function swapChars(
  firstIndex: number,
  secondIndex: number,
  str: string
): string {
  const arr: string[] = str.split('');
  [arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]];
  return arr.join('');
}
