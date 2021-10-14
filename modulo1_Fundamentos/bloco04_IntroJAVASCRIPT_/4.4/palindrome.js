const isPalindrome = (word) => {
  // 1. Use the split() method to split the word and put into array
  const splitWord = word.split('');

  // 2. Use the reverse() method to reverse the new created array
  const revArr = splitWord.reverse();
  
  // 3. Use the join() method to join all elements of the array into a string
  const reverseWord = revArr.join('');

  // 4. Check if the word passed by parameter is the same word that is stored at the variable revWord
  if (reverseWord === word) {
    return true;
  } else {
    return false;
  }
  
};
console.log(isPalindrome('arara'))