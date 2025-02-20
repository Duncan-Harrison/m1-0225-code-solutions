/* exported drop */
function drop(array: unknown[], count: number): unknown[] {
  const newArray: unknown[] = [];
  for (let i = array.length - 1; i > count - 1; i--) {
    newArray.unshift(array[i]);
  }
  return newArray;
}
