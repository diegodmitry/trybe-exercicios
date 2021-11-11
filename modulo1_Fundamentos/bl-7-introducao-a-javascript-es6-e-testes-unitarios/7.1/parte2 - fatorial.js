// 1.
// the iterative approach
// Pro: Takes less memory than the recursive implementation.
// Con: The code is lengthier than that of the recursive implementation.
const fatorial = (num) => {
  let answer = 1;
  if (num === 0 || num === 1) {
    return answer;
  } else {
    for (let i = num; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  }
};
console.log(fatorial(4));

// the recursive approach
// Pro: Shorter and cleaner code.
// Con: Greater memory requirements as all the function calls remain on the stack until the base case is reached.
const fatorialR = (num) => {
  // return ternary operator
  // base                      // recursive case
  return num === 0 || num === 1 ? 1 : num * fatorialR(num - 1);
};
console.log(fatorialR(4));

// 2.
const longestWord = (sentence) => {
  // Step 1. Split the string into an array of strings
  const strSplit = sentence.split(" ");

  // Step 2. Initiate a variable that will hold the longest word
  let theBiggestWord = strSplit[0];

  // Step 3. Loop over array
  strSplit.forEach((el) => {
    if (el.length > theBiggestWord.length) {
      theBiggestWord = el;
    }
  });

  return theBiggestWord;
};

console.log(
  longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")
);

// longest word with sort() method
const longestWord2 = (sentence) => {
  // Step 1. Split the string into an array of strings
  const sentenceSplit = sentence.split(" ");

  // Step 2. Sort the elements in the array
  // the longest word will be the first element into array
  sentenceSplit.sort((a, b) => b.length - a.length);

  return sentenceSplit[0];
};
console.log(
  longestWord2("Antônio foi no banheiro e não sabemos o que aconteceu")
);

// longest word with reduce() method
const longestWord3 = (sentence) => {
  // Step 1. Split the string into an array of strings
  const sentenceSplit = sentence.split(" ");

  // Step 2. Use the reduce method
  const theBiggestWord = sentenceSplit.reduce((biggest, currentWord) => {
    // if (currentWord.length > biggest.length) {
    //   return currentWord;
    // } else {
    //   return biggest;
    // }
    
    // ternary operator
    return currentWord.length > biggest.length ? currentWord : biggest;
  }, '');

  return theBiggestWord;
};
console.log(
  longestWord3("Antônio foi no banheiro e não sabemos o que aconteceu")
);
