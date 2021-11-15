const myFizzBuzz = require('./myFizzBuzz.js');

describe('Testing FizzBuzz function', () => {
  test('1. Verificar se o número é divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });
  test('2. Verificar se o número é divisível por 3', () => {
    expect(myFizzBuzz(9)).toMatch('fizz');
  });
  test('3. Verificar se o número é divisível por 5', () => {
    expect(myFizzBuzz(10)).toMatch('buzz');
  });
  test('4. Verificar se o número não é divisível por 3 e 5', () => {
    expect(myFizzBuzz(4)).toEqual(4);
  });
  test('5. Verificar se retorna false', () => {
    expect(myFizzBuzz('5')).toEqual(false);
  });
});
