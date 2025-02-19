'use strict';
/* exported compact */
function compact(array) {
  const newArray = [];
  for (const i of array) {
    if (i) {
      console.log(i);
      newArray.push(i);
    }
  }
  return newArray;
}
