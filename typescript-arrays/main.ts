const colors: string[] = ['red', 'white', 'blue'];
console.log('value of colors[0]: ', colors[0]);
console.log('value of colors[1]: ', colors[1]);
console.log('value of colors[2]: ', colors[2]);
const america: string = `America is ${colors[0]}, ${colors[1]}, and ${colors[2]}`;
console.log(america);
colors[2] = 'green';
const mexico: string = `Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}`;
console.log(mexico);
console.log('Value of colors: ', colors);
console.log('typeof colors: ', typeof colors);

const students: string[] = ['Tim', 'Tom', 'Tam', 'Tum'];
const numberOfStudents: number = students.length;
console.log('There are ', numberOfStudents, ' students in the class.');
const lastIndex: number = numberOfStudents - 1;
const lastStudent: string = students[lastIndex];
console.log(`The last student in the class is ${lastStudent}.`);
console.log('Value of students: ', students);
console.log('typeof students: ', typeof students);
