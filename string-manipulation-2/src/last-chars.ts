/* exported lastChars */
function lastChars(lgth: number, str: string): string {
  const arr: string[] = str.split('');
  if (arr.length === 0) {
    return '';
  }
  let firstIndex: number;
  if (arr.length <= lgth) {
    firstIndex = 0;
  } else {
    firstIndex = arr.length - lgth;
  }
  const newWord: string = str.substring(firstIndex, str.length);
  return newWord;
}
