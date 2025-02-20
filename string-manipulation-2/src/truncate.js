'use strict';
/* exported truncate */
function truncate(length, str) {
  let newStr = '';
  const newStrBase = str.split('');
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
