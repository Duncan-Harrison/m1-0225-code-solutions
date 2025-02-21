/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): string[] {
  const newWords: string[] = [];
  for (let string of words) {
    string += suffix;
    newWords.push(string);
  }
  return newWords;
}
