'use strict';
/* exported includesSeven */
function includesSeven(array) {
  for (const a of array) {
    if (a === 7) {
      return true;
    }
  }
  return false;
}
