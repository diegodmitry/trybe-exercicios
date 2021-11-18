const books = require('./exercise1.js');
const arr = books.slice();
function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  return arr.sort((a, b) => b.releaseYear - a.releaseYear);
}
booksOrderedByReleaseYearDesc();
console.log(arr);
