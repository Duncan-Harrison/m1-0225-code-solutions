'use strict';
/* exported oddOrEven */
function oddOrEven(numbers) {
  const resArr = [];
  for (const n of numbers) {
    if (n % 2 === 0) {
      resArr.push('even');
    } else {
      resArr.push('odd');
    }
  }
  return resArr;
}
