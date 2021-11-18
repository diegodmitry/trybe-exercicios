const books = require('./exercise1.js');
function smallerName() {
  let nameBook = books[0].name;
  books.forEach((book) => {
    if (book.name.length < nameBook.length) nameBook = book.name;
  });
  return nameBook;
}
console.log(smallerName());
