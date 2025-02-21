'use strict';
/* exported invert */
function invert(source) {
  const newObj = {};
  for (const key in source) {
    const values = [source[key], key];
    newObj[values[0]] = values[1];
  }
  return newObj;
}
