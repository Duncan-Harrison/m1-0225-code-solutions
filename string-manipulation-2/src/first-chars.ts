/* exported firstChars */
function firstChars(lgth: number, str: string): string {
  if (str.length === 0) {
    return '';
  }
  let endRange: number;
  if (str.length <= lgth) {
    endRange = str.length;
  } else {
    endRange = lgth;
  }
  const newWord: string = str.substring(0, endRange);
  return newWord;
}
