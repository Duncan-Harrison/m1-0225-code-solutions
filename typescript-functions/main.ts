function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}
const minutesToSecondsResult: number = convertMinutesToSeconds(9);
console.log('Value of minutesToSecondsResult: ', minutesToSecondsResult);

function greet(name: string): string {
  return 'Hello, ' + name + '!';
}
const greetMe: string = greet('Duncan');
console.log('value of greetMe: ', greetMe);

const getArea = (width: number, height: number): number => {
  return width * height;
};
console.log('Area of a 2 by 4: ', getArea(2, 4));

interface Person {
  firstName: string;
  lastName: string;
}
const getFirstName = (person: Person): string => {
  return person.firstName;
};
console.log(
  'My MVP pick this year is ',
  getFirstName({ firstName: 'Steph', lastName: 'curry' })
);

const getLastElement = (array: any[]): any => {
  const lastElement: any = array[array.length - 1];
  return lastElement;
};
const favoriteNumbers: any[] = [4, 6, 10, 27];
console.log(
  'My final favoriteNumbers entry is ',
  getLastElement(favoriteNumbers)
);

function callOtherFunction(otherFunction: Function, params: unknown): any {
  const result: unknown = otherFunction(params);
  return result;
}
const callLastElement: unknown = callOtherFunction(getLastElement, [
  'I',
  'am',
  'the',
  'night',
]);
console.log('value of callLastElement: ', callLastElement);
