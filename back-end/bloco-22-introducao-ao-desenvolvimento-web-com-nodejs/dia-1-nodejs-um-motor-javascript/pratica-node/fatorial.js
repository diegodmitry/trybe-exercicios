var readlineSync = require('readline-sync');

function fatorial () {
    // const number = 5;
    userAnswer = readlineSync.question('Digite o número fatorial: ');
    let res = userAnswer;
    for (let i = 1; i < userAnswer; i++) {
        res *= i;
    }
    if (isNaN(res)) {
        console.log('Não existe fatorial!');
    }
    if (res === 0 || res === 1) {
       console.log(1);
    }
    // console.log(isNaN(res));
    console.log(res);
};

module.exports = fatorial;