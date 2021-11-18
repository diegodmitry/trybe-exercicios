const books = require('./exercise1.js');
const arr = books.slice();

function authorUnique() {
  // escreva seu código aqui
  let birthYear = arr[0].author.birthYear;
  arr.forEach((book) => {
    if (birthYear === book.author.birthYear) {
      birthYear = true;
    } else {
      birthYear = false;
    }
  })
  return birthYear;
}

console.log(authorUnique());