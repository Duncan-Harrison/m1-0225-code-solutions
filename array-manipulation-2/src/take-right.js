'use strict';
/* exported takeRight */
function takeRight(array, count) {
  const newArray = [];
  const firstIndex = array.length - count;
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.unshift(array[i]);
    if (i === firstIndex) {
      break;
    }
  }
  return newArray;
}
