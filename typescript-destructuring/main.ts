interface Book {
  title: string;
  author: string;
  libraryId: number;
}

const book1: Book = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryId: 3353,
};

const { title, author, libraryId } = book1;
console.log(
  'The title of the book is ' +
    title +
    ', the author is ' +
    author +
    ', and the library ID is ' +
    libraryId +
    '.'
);

const book2: Book = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryId: 2345,
};

const { title: bookName, author: writer, libraryId: dewey } = book2;
console.log(
  'The title of the book is ' +
    bookName +
    ', the author is ' +
    writer +
    ', and the library ID is ' +
    dewey +
    '.'
);

const library: Book[] = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryId: 1254,
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryId: 4264,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryId: 3245,
  },
  {
    title: "Dead Dead Demons' De De De De Destruction",
    author: 'Inio Asano',
    libraryId: 1233,
  },
];

const [book3, book4, book5] = library;

console.log('book3: ', book3);
console.log('book4: ', book4);
console.log('book5: ', book5);

const [, book6] = library;
console.log('book6: ', book6);
