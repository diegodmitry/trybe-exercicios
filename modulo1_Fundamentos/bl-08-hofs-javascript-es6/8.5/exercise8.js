// escreva greet abaixo
const greet = (string1, string2 = 'Hi') => `${string2} ${string1}`;

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'