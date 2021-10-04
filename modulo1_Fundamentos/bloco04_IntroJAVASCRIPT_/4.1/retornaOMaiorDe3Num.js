const a = 25;
const b = 10;
const c = 82;
const numbers = [a, b, c];
/* Math.max() retorna o maior de um ou mais números. 
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max

 Reduce Method
 O valor de retorno da sua função reducer é atribuída ao acumulador. O acumulador, com seu valor atualizado, é repassado para cada iteração subsequente pelo array, que por fim, se tornará o valor resultante, único, final.

 https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
*/
const maxNumber = numbers.reduce((acc, currVal) => Math.max(acc, currVal));
console.log(maxNumber);