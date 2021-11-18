// 1.
const objFunc = (fullName) => {
  const email = `${fullName.toLowerCase().split(' ').join('_')}@trybe.com`;
  return {
    fullName,
    email,
  };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

// console.log(newEmployees(objFunc));
///////////////////////////////////////////////////////////////////////////////

// 2.
const check = (betNumber, oneFive) => {
  if (betNumber === oneFive) {
    return 'Parabéns você ganhou';
  } else {
    return 'Tente novamente';
  }
};
const randomNum = (betNumber, check) => {
  const oneFive = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  return check(betNumber, oneFive);
};
console.log(randomNum(1, check));
///////////////////////////////////////////////////////////////////////////////

// 3.
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const repeat = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} corretas`;
};

console.log(repeat(RIGHT_ANSWERS, STUDENT_ANSWERS, (rAnswer, uAnswer) => {
  if (rAnswer === uAnswer) {
    return 1;
  } if (uAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
}));
