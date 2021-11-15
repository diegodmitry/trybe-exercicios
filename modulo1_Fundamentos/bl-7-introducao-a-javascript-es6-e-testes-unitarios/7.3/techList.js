const techList = (array, name) => {
  if (array.length === 0) return 'Vazio!';
  const arrSort = array.sort();
  const resultOfArray = [];
  for (const key in arrSort) {
    resultOfArray.push({
      tech: arrSort[key],
      name,
    });
  }
  return resultOfArray;
};

module.exports = techList;
