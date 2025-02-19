'use strict';
/* exported isUpperCased */
function isUpperCased(word) {
  const newWord = word.toUpperCase();
  if (word === newWord) {
    return true;
  } else {
    return false;
  }
}
