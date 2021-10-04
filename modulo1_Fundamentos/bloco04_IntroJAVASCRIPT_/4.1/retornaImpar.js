/**9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .  */
/** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some */
const a = 10;
const b = 2;
const c = 1;
const numbers = [a, b, c];
/** The some method will return true or false.
 * The condition bellow check if at least one number is even. If so, print true.
 */
const result = numbers.some((num) => (num % 2 === 1));
console.log(result);