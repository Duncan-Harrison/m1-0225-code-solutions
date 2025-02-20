/* exported takeRight */
function takeRight(array: unknown[], count: number): unknown[] {
  const newArray: unknown[] = [];
  const firstIndex: number = array.length - count;
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.unshift(array[i]);
    if (i === firstIndex) {
      break;
    }
  }
  return newArray;
}
