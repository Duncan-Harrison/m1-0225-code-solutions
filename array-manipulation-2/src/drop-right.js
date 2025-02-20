'use strict';
/* exported dropRight */
function dropRight(array, count) {
  const newArray = [];
  const lastIndex = array.length - count;
  for (let i = 0; i < array.length; i++) {
    if (lastIndex < 0 || i === lastIndex) {
      break;
    }
    newArray.push(array[i]);
  }
  return newArray;
}
