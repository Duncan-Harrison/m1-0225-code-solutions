'use strict';
/* exported filterOutNulls */
function filterOutNulls(values) {
  const nulVal = [];
  const resVal = [];
  for (const v of values) {
    if (v !== null) {
      resVal.push(v);
    } else {
      nulVal.push(v);
    }
  }
  return resVal;
}
