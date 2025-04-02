'use strict';
const books = [
  {
    isbn: '1-4165-0600-4',
    title: 'I, Robot',
    author: 'Isaac Asimov',
  },
  {
    isbn: '978-0553293357',
    title: 'Foundation',
    author: 'Isaac Asimov',
  },
  {
    isbn: '978-0765319173',
    title: 'The Currents of Space',
    author: 'Isaac Asimov',
  },
];
console.log('Our books: ', books);
console.log('typeof books: ', typeof books);
const bookJson = JSON.stringify(books);
console.log('book JSON: ', bookJson);
console.log('typeof book JSON: ', typeof bookJson);
const student = '{"id": 1938, "name": "Douglas Hyde"}';
console.log('student: ', student);
console.log('typeof student: ', typeof student);
const tsStudent = JSON.parse(student);
console.log('TS Student: ', tsStudent);
console.log('typeof TS Student: ', typeof tsStudent);
