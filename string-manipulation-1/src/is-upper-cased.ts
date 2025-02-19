/* exported isUpperCased */
function isUpperCased(word: string): boolean {
  const newWord: string = word.toUpperCase();
  if (word === newWord) {
    return true;
  } else {
    return false;
  }
}
