'use strict';
const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
console.log('In order:');
values.forEach((el) => console.log(el));
console.log('Reverse order:');
let i = values.length - 1;
values.forEach((el) => {
  console.log(values[i]);
  i--;
  if (i === 0) return el;
});
