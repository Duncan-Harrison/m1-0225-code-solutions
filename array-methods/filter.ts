const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const evens = numbers.filter((el) => el % 2 === 0);
console.log('Even numbers ', evens);

function dFree(word: string): any {
  const wordArray: string[] = word.split('');
  let checked: string = '';
  for (let j = 0; j < wordArray.length; j++) {
    if (wordArray[j] === 'd' || wordArray[j] === 'D') {
      return false;
    } else {
      checked += wordArray[j];
    }
  }
  return checked;
}
const noD = names.filter((el) => dFree(el));
console.log('No D ', noD);
