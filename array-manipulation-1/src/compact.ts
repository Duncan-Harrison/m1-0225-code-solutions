/* exported compact */
function compact(array: unknown[]): unknown[] {
  const newArray: unknown[] = [];
  for (const i of array) {
    if (i) {
      console.log(i);
      newArray.push(i);
    }
  }
  return newArray;
}
