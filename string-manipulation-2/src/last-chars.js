'use strict';
/* exported lastChars */
function lastChars(lgth, str) {
  const arr = str.split('');
  if (arr.length === 0) {
    return '';
  }
  let firstIndex;
  if (arr.length <= lgth) {
    firstIndex = 0;
  } else {
    firstIndex = arr.length - lgth;
  }
  const newWord = str.substring(firstIndex, str.length);
  return newWord;
}
