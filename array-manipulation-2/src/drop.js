'use strict';
/* exported drop */
function drop(array, count) {
  const newArray = [];
  for (let i = array.length - 1; i > count - 1; i--) {
    newArray.unshift(array[i]);
  }
  return newArray;
}
