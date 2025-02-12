'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
const minutesToSecondsResult = convertMinutesToSeconds(9);
console.log('Value of minutesToSecondsResult: ', minutesToSecondsResult);
function greet(name) {
  return 'Hello, ' + name + '!';
}
const greetMe = greet('Duncan');
console.log('value of greetMe: ', greetMe);
const getArea = (width, height) => {
  return width * height;
};
console.log('Area of a 2 by 4: ', getArea(2, 4));
const getFirstName = (person) => {
  return person.firstName;
};
console.log(
  'My MVP pick this year is ',
  getFirstName({ firstName: 'Steph', lastName: 'curry' })
);
const getLastElement = (array) => {
  const lastElement = array[array.length - 1];
  return lastElement;
};
const favoriteNumbers = [4, 6, 10, 27];
console.log(
  'My final favoriteNumbers entry is ',
  getLastElement(favoriteNumbers)
);
function callOtherFunction(otherFunction, params) {
  const result = otherFunction(params);
  return result;
}
const callLastElement = callOtherFunction(getLastElement, [
  'I',
  'am',
  'the',
  'night',
]);
console.log('value of callLastElement: ', callLastElement);
