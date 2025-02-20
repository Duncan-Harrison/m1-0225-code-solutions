'use strict';
/* exported capitalizeWord */
function capitalizeWord(word) {
  const firstLetter = word[0].toUpperCase();
  const rest = word.slice(1).toLowerCase();
  const newWord = firstLetter + rest;
  if (newWord === 'Javascript') {
    return 'JavaScript';
  } else {
    return newWord;
  }
}
