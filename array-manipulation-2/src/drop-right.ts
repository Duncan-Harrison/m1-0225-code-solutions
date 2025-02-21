/* exported dropRight */
function dropRight(array: unknown[], count: number): unknown[] {
  const newArray: unknown[] = [];
  const lastIndex: number = array.length - count;
  for (let i = 0; i < array.length; i++) {
    if (lastIndex < 0 || i === lastIndex) {
      break;
    }
    newArray.push(array[i]);
  }
  return newArray;
}
