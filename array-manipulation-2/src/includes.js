'use strict';
/* exported includes */
function includes(array, value) {
  for (const e of array) {
    if (e === value) {
      return true;
    }
  }
  return false;
}
