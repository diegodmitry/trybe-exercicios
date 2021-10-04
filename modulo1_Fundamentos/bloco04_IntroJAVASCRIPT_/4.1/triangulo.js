/** 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
 * Dica: Qualquer triângulo, a soma das medidas dos três ângulos internos é igual a 180 graus.
 *
 * Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/isNaN
 * 
 * Logical NOT(!)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
 */

const a = 80;
const b = 70;
const c = 30;

if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
  // console.log(a , b, c);
  if (a + b + c === 180) {
      console.log('true');
  } else {
    console.log('false');
  }
} else {
  console.error(`Ângulo inválido`);
}
