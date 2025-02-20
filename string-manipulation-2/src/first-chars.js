'use strict';
/* exported firstChars */
function firstChars(lgth, str) {
  if (str.length === 0) {
    return '';
  }
  let endRange;
  if (str.length <= lgth) {
    endRange = str.length;
  } else {
    endRange = lgth;
  }
  const newWord = str.substring(0, endRange);
  return newWord;
}
