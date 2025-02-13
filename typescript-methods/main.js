'use strict';
const heroes = ['Spider-Man', 'Superman', 'Batman', 'Catwoman'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex: ', randomIndex);
const randomHero = heroes[randomIndex];
console.log('One of my favorite superheroes is ', randomHero);
const library = [
  {
    title: '20,000 Leagues Under the Sea',
    author: 'Jules Verne',
  },
  {
    title: 'Dracula',
    author: 'Bram Stoker',
  },
  {
    title: 'Pride & Prejudice',
    author: 'Jane Austen',
  },
];
const lastBook = library.pop();
console.log('The last book in the library is ', lastBook);
const firstBook = library.shift();
console.log('The first book in the library is ', firstBook);
const js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Our library contains: ', library);
const fullName = 'Duncan Harrison';
const firstAndLastName = fullName.split(' ');
console.log('My full name is ', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('I said my name was ', sayMyName);
const employee = {
  name: 'Vincent Frankini',
  age: 40,
  position: 'SEO Manager',
};
const employeeKeys = Object.keys(employee);
console.log('We list our employees by ', employeeKeys);
const employeeValues = Object.values(employee);
console.log('The values we store are ', employeeValues);
const employeePairs = Object.entries(employee);
console.log('The first employee is ', employeePairs);
