const readline = require('readline-sync');

const peso = readline.question('Qual o seu peso? ');
const altura = readline.question('Qual a sua altura? ');

const calculaIMC = (peso, altura) => {
        console.log(peso / (altura * altura));
};
calculaIMC(peso, altura);

