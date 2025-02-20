'use strict';
/* exported swapChars */
function swapChars(firstIndex, secondIndex, str) {
  const arr = str.split('');
  [arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]];
  return arr.join('');
}
