const isBiggestName = (arr) => {
  // 1. Declaring the variable to store the longest word
  let longestWord = arr[0];

  // 2. Loop over the array
  arr.forEach(longW => {

    // 3. Check if the element size is greater than the longestWord
    if (longW.length > longestWord.length) {
      longestWord = longW;
    }
  });
  return longestWord;
};
console.log(isBiggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))