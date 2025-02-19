/* exported isLowerCased */
function isLowerCased(word: string): boolean {
  const newWord: string = word.toLowerCase();
  if (word === newWord) {
    return true;
  } else {
    return false;
  }
}
