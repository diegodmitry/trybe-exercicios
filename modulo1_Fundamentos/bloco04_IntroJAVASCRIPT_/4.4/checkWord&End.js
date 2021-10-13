const checkWord = (word, ending) => {
  // 1. Get the last 3 characters
  const lastThree = word.slice(word.length - 3)
  // 2. Check if the variable is true with ternary operator 
  return (lastThree.includes(ending)) ? console.log(true) : console.log(false);
};
checkWord('trybe', 'be');

// previous attempts ⬇️
// const checkWord = (word, ending) => {
//   // console.log(word.indexOf(ending));
//   const lastThree = word.slice(word.length - 3)
//   console.log(lastThree);

//   return (word.indexOf(ending) > -1, 10) ? console.log(true) : console.log(false);
// };
// const checkWord = (word, ending) => {
//   return (word.includes(ending)) ? console.log(true) : console.log(false);
// };
// checkWord('joaofernando', 'donan');