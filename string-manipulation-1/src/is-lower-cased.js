'use strict';
/* exported isLowerCased */
function isLowerCased(word) {
  const newWord = word.toLowerCase();
  if (word === newWord) {
    return true;
  } else {
    return false;
  }
}
