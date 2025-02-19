'use strict';
/* exported pick */
function pick(source, keys) {
  const o = {};
  for (const key of keys) {
    if (source[key] !== undefined) {
      o[key] = source[key];
    }
  }
  return o;
}
