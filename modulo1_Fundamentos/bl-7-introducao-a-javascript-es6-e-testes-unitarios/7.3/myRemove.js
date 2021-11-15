const myRemove = (array, item) => {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (item !== array[i]) {
      newArr.push(array[i]);
    }
  }
  return newArr;
};

module.exports = myRemove;