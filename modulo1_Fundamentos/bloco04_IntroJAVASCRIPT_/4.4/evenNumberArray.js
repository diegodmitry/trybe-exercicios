let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
const arrayOfNumbers = (array) => {
  array.forEach(arr => {
    const arraysEven = arr.filter(el => el % 2 === 0);
    console.log(arraysEven);
  });
};
arrayOfNumbers(vector);