'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const newWords = [];
  for (let string of words) {
    string += suffix;
    newWords.push(string);
  }
  return newWords;
}
