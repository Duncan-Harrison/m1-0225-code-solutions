'use strict';
const student = {
  firstName: 'Duncan',
  lastName: 'Harrison',
  age: 35,
};
const fullName = `${student.firstName} ${student.lastName}`;
console.log('value of fullName: ', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'SEO';
console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log(
  'value of student.previousOccupation: ',
  student.previousOccupation
);
console.log('value of student: ', student);
console.log('typeof student: ', typeof student);
const vehicle = {
  make: 'Ford',
  model: 'Mustang GT',
  year: 1969,
};
vehicle['color'] = 'Yellow';
vehicle['isConvertible'] = true;
console.log('value of vehicle["color"]: ', vehicle['color']);
console.log('value of vehicle["isConvertible"]: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);
console.log('typeof vehicle: ', typeof vehicle);
const pet = {
  name: 'Alba',
  kind: 'Chihuahua - Dachshund Mix',
};
delete pet.name;
delete pet.kind;
console.log('value of pet: ', pet);
console.log('typeof pet: ', typeof pet);
