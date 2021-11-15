const hydrate = (string) => {
  const arrSplit = string.split(' ');
  const quantityOfWater = [];
  arrSplit.forEach((element) => {
    if (!isNaN(element)) quantityOfWater.push(element);
  });
  const result = quantityOfWater.reduce((a, b) => Number(a) + Number(b), 0);
  return (result === 1) ? `${result} copo de água` : `${result} copos de água`;
};

module.exports = hydrate;
