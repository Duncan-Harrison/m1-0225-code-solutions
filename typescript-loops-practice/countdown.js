'use strict';
/* exported countdown */
function countdown(num) {
  const numArray = [];
  let i = num;
  while (i >= 0) {
    numArray.push(i);
    i--;
  }
  return numArray;
}
