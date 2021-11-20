const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const arrFlat = arrays.reduce((acc, curr) => {
    // return [`${acc},${curr}`];
    return `${acc},${curr}`.split(',');
  })
  return(arrFlat);
}
console.log(flatten());