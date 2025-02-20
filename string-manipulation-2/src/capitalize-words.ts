/* exported capitalizeWords */
function capitalizeWords(str: string): string {
  const strArray: string[] = str.split(' ');
  for (let i = 0; i < strArray.length; i++) {
    const firstLetter: string = strArray[i][0].toUpperCase();
    const rest: string = strArray[i].slice(1).toLowerCase();
    const newWord: string = firstLetter + rest;
    strArray.splice(i, 1, newWord);
  }
  return strArray.join(' ');
}
