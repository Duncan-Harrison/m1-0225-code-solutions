'use strict';
/* exported omit */
function omit(source, keys) {
  const resObj = {};
  for (const key in source) {
    let omitKey = false;
    for (let i = 0; i < keys.length; i++) {
      if (key === keys[i]) {
        omitKey = true;
        break;
      }
    }
    if (!omitKey) {
      resObj[key] = source[key];
    }
  }
  return resObj;
}
