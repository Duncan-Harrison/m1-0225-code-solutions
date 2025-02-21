'use strict';
/* exported filterOutStrings */
function filterOutStrings(values) {
  const nulVal = [];
  const resVal = [];
  for (const v of values) {
    if (typeof v !== typeof '') {
      resVal.push(v);
    } else {
      nulVal.push(v);
    }
  }
  return resVal;
}
