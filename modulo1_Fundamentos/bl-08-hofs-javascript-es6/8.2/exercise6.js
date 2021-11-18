const books = require('./exercise1.js');
const arr = books.slice();

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  const bool = arr.some((obj)=>{
    return obj.releaseYear >= 1980 && obj.releaseYear < 1990;
  })
  return bool;
}
someBookWasReleaseOnThe80s();