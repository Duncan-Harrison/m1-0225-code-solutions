'use strict';
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
console.log(isUnderFive(7));
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(4));
function startsWithJ(string) {
  const letters = string.split('');
  if (letters[0] === 'j' || letters[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
console.log(startsWithJ('Jericho'));
function isOldEnoughToDrink(person) {
  if (person.age > 20) {
    return true;
  } else {
    return false;
  }
}
console.log(isOldEnoughToDrink({ name: 'Bilbo Baggins', age: 110 }));
function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
console.log(isOldEnoughToDrive({ name: 'Eugene Burger', age: 13 }));
function isOldEnoughToDrinkandDrive(person) {
  if (person.name && person.age !== undefined) {
    return false;
  } else {
    return false;
  }
}
console.log(isOldEnoughToDrinkandDrive({ name: 'Hugh Laurie', age: 65 }));
function categorizeAcidity(pH) {
  if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
console.log(categorizeAcidity(6.5));
function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko' || 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}
console.log(introduceWarnerBro('Kyle'));
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'The Warriors';
    case 'comedy':
      return 'Dr. Strangelove';
    case 'horror':
      return 'Carnival of Souls';
    case 'drama':
      return 'Steel Magnolias';
    case 'musical':
      return 'none';
    case 'sci-fi':
      return 'Star Wars';
    default:
      return 'I have no idea';
  }
}
console.log(recommendMovie('western'));
