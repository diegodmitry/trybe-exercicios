const isRepeatedInteger = (arr) => {
  
  // 1. To compare numbers, we can subtract prevEl from currEl.
  const maxFreq = arr.sort((prevEl, currEl) => {

    // 2. Check the amount of time the current item occurs
    // console.log(arr.filter(el => el === currEl).length)
    // 3. The sign '-' will sort the array in ascending order
    // 4. Check the amount of time the previous item occurs in the array
    // console.log(arr.filter(el => el === prevEl));
    return arr.filter(el => el === currEl).length - arr.filter(el => el === prevEl).length
  });
  // 5. The shift() method removes the first element from an array and returns that removed element.
  console.log(maxFreq.shift());
};

isRepeatedInteger([2, 3, 2, 5, 8, 2, 3]);