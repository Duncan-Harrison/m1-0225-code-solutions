/* exported countdown */
function countdown(num: number): number[] {
  const numArray: number[] = [];
  let i = num;
  while (i >= 0) {
    numArray.push(i);
    i--;
  }
  return numArray;
}
