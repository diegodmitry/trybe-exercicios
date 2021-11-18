const books = require('./exercise1.js');
const arr = books.slice();
console.log(arr);
function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  const bool = arr.every((obj) => {
    return obj.author.birthYear >= 1901;
  });
  return bool;
}
everyoneWasBornOnSecXX();
