const myExpenses = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const myIncome = 1000;

const handleExpenses = (myExpenses) => {
  const eachValue = myExpenses.map((item) => Object.values(item)).flat(1);
  const total = eachValue.reduce((acc, cValue) => acc + cValue);
  // console.log(total);
  return total;
};
// handleExpenses(myExpenses);
const monthlyBudget = (myIncome, myExpenses, handleExpenses) => {

  const totalExpenses = handleExpenses(myExpenses);
  const totalAfterExpenses = myIncome - totalExpenses;

  console.log(`Balanço do mês:
    Recebido: R$${myIncome},00
    Gasto: R$${totalExpenses},00
    Saldo: R$${totalAfterExpenses},00 `);
};

monthlyBudget(3000, myExpenses, handleExpenses);
