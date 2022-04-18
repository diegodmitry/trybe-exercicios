const soma = (valorA, valorB) => valorA + valorB;
const subtracao = (valorA, valorB) => valorA - valorB;
const multiplicacao = (valorA, valorB) => valorA * valorB;
const divisao = (valorA, valorB) => valorA / valorB;

const calculadora = (valorA, valorB, operacao) => {
    switch (operacao) {
        case "soma":
            return soma(valorA, valorB);
            // return;
        case "subtracao":
            return subtracao(valorA, valorB);
            // break;
        case "multiplicacao":
            return multiplicacao(valorA, valorB);
            // break;
        case "divisao":
            return divisao(valorA, valorB);
            // break;
        default:
            break;
    }
};

// console.log(calculadora(2, 2, "soma"));

module.exports = calculadora;