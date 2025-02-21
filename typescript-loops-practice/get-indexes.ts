/* exported getIndexes */
function getIndexes(array: any[]): number[] {
  const indexArray: number[] = [];
  for (let i = 0; i < array.length; i++) {
    indexArray.push(i);
  }
  return indexArray;
}
