const isBiggesyIndex = (arr) => {
  // 1. Declare the variable to store the biggest index
  let biggestIndex = 0;

  // 2. Loop over the array
  arr.forEach((maxE, index) => {
    
    // 3. Check if the element of the array is bigger than the element inside the biggestIndex
    if(maxE > biggestIndex) {

      // 4. If true, store the index of the element inside the variable biggestIndex
      biggestIndex = index;
    }
  });
  return biggestIndex;
};
console.log(isBiggesyIndex([2, 3, 6, 7, 10, 1]));