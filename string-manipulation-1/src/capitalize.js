'use strict';
/* exported capitalize */
function capitalize(word) {
  const firstLetter = word[0].toUpperCase();
  const rest = word.slice(1).toLowerCase();
  return firstLetter + rest;
}
