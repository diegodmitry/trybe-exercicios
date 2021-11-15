function encode(string) {
  let newString = string.split('');
  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === 'a') newString[i] = 1;
    if (newString[i] === 'e') newString[i] = 2;
    if (newString[i] === 'i') newString[i] = 3;
    if (newString[i] === 'o') newString[i] = 4;
    if (newString[i] === 'u') newString[i] = 5;
  }
  return newString.join('');
}
function decode(string) {
  let newString = string.split('');
  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === '1') newString[i] = 'a';
    if (newString[i] === '2') newString[i] = 'e';
    if (newString[i] === '3') newString[i] = 'i';
    if (newString[i] === '4') newString[i] = 'o';
    if (newString[i] === '5') newString[i] = 'u';
  }
  return newString.join('');
}

module.exports = { encode, decode };
