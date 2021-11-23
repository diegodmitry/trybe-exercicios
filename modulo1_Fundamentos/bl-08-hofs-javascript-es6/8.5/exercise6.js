const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
// const toObject = (array) => {
//   const [modelo, fabricante, ano] = array;
//   return {
//     modelo,
//     fabricante,
//     ano,
//   }
// };
// console.log(toObject(palio));
// console.log(toObject(shelbyCobra));
// console.log(toObject(chiron));

const toObject = ([modelo, fabricante, ano]) => {
  return {
    modelo,
    fabricante,
    ano,
  }
};
console.log(toObject(palio));
// console.log(toObject(shelbyCobra));
// console.log(toObject(chiron));