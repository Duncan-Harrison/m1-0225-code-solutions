/* exported capitalizeWord */
function capitalizeWord(word: string): string {
  const firstLetter: string = word[0].toUpperCase();
  const rest: string = word.slice(1).toLowerCase();
  const newWord: string = firstLetter + rest;
  if (newWord === 'Javascript') {
    return 'JavaScript';
  } else {
    return newWord;
  }
}
