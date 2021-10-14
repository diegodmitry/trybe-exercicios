const isLowestIndex = (arr) => {
  // 1. Declare the variable to store the lowest index, that is the first element inside array
  let lowestIndex = arr[0];

  // 2. Loop over the array
  arr.forEach((lowE, index) => {
    
    // 3. Check if the element of the array is lower than the element inside the lowestIndex
    if(lowE < lowestIndex) {

      // 4. If true, store the index of the element inside the variable lowestIndex
      lowestIndex = index;
    }
  });
  return lowestIndex;
};
console.log(isLowestIndex([2, 4, 6, 7, 10, 0, -3]));