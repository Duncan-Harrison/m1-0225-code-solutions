/* exported oddOrEven */
function oddOrEven(numbers: number[]): string[] {
  const resArr: string[] = [];
  for (const n of numbers) {
    if (n % 2 === 0) {
      resArr.push('even');
    } else {
      resArr.push('odd');
    }
  }
  return resArr;
}
