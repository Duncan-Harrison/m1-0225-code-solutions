/* exported truncate */
function truncate(length: number, str: string): string {
  let newStr: string = '';
  const newStrBase: string[] = str.split('');
  if (newStrBase.length === 0) {
    return '...';
  }
  for (let i = 0; i < newStrBase.length; i++) {
    newStr += newStrBase[i];
    if (i === length - 1 || i === newStrBase.length - 1) {
      newStr += '...';
      break;
    }
  }
  return newStr;
}
