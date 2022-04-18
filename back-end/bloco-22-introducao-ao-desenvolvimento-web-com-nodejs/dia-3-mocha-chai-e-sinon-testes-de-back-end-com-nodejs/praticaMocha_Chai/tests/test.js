
const { expect } = require('chai');

const calculadora = require('../calculadora');

describe('Quando a média for menor que 7', () => {
    const media = calculadora(4, 2, 'soma');
    const isPassed = () => (media > 7) ? 'aprovado' : 'reprovado';
    it('retorna reprovado', () => {
        const resposta = isPassed();
        expect(resposta).equals('reprovado');
    });
});

describe('Quando a média for maior que 7', () => {
    const media = calculadora(6, 2, 'soma');
    const isPassed = () => (media > 7) ? 'aprovado' : 'reprovado';
    it('retorna reprovado', () => {
        const resposta = isPassed();
        expect(resposta).equals('aprovado');
    });
});

describe('Quando a média for igual a 7', () => {
    const media = calculadora(5, 2, 'soma');
    const isPassed = () => (media > 7 || media === 7) ? 'aprovado' : 'reprovado';
    it('retorna "aprovado"', () => {
        const resposta = isPassed();
        expect(resposta).equals('aprovado');
    });
});
