'use strict';
/* exported capitalizeWords */
function capitalizeWords(str) {
  const strArray = str.split(' ');
  for (let i = 0; i < strArray.length; i++) {
    const firstLetter = strArray[i][0].toUpperCase();
    const rest = strArray[i].slice(1).toLowerCase();
    const newWord = firstLetter + rest;
    strArray.splice(i, 1, newWord);
  }
  return strArray.join(' ');
}
