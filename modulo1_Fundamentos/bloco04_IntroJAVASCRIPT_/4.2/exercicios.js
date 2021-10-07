/** Iremos utilizar esse array para realizar os exercícios do 1 ao 7: */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/** 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;  */
for (const number of numbers) {
  console.log(number);
}
/** Source: https://developer.mozilla.org */
// numbers.forEach((num) => console.log(num));

/** 2. Some todos os valores contidos no array e imprima o resultado; */
let aTotal = 0;
for (const number of numbers) {
  // total = total + number;
  aTotal += number;
}
console.log('Total:', aTotal);
/** Source: https://developer.mozilla.org */
// const total = numbers.reduce((acc, currentV) => acc + currentV, 0);
// console.log(total);

/** 3. Calcule e imprima a média aritmética dos valores contidos no array;  */
let total = 0;
for (const number of numbers) {
  total += number;
}
const average = total / numbers.length;
console.log('Média', average);
// const avg = numbers.reduce((acc, cValue) => (acc + cValue), 0) / numbers.length;
// console.log(avg);

/** 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";  */
let total1 = 0;
for (const number of numbers) {
  total1 += number;
};
const average2 = total1 / numbers.length;
// const average = numbers.reduce((acc, currentV) => acc + currentV, 0) / numbers.length
// console.log(average);
if (average2 > 20) {
  console.log(`Valor maior que 20`);
} else {
  console.log(`Valor menor ou igual que 20`);
}

/** 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;  */
// First element
let max = numbers[0];
for (const number of numbers) {
  if (number > max) {
    max = number;
  }
}
console.log('O maior valor',max);
/**
 * Source: https://developer.mozilla.org
 * Spread allows an iterable such as an array expression or string to be expanded in places where elements (for array literals) are expected. */
// let max = Math.max(...numbers)
// console.log(max);

/** 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";  */
let odd = [];
for (const number of numbers) {
  if (number % 2 !== 0) {
    odd.push(number);
  }
}
console.log('Números ímpares',odd);
// const odd = numbers.filter((number) => {
//   if (number % 2 !== 0) {
//     return number;
//   }
// });
// console.log(odd);
// Refectoring with Ternary Operator
// const odd = numbers.filter((number) => (number % 2 !== 0) ? number : '');
// console.log(odd);

/** 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;  */
let smallestNumber = numbers[0];
for (const number of numbers) {
  if (number < smallestNumber) {
    smallestNumber = number;
  };
};
console.log('O menor valor', smallestNumber);
// Refactoring...
// const smallestNumber = Math.min(...numbers);
// console.log(smallestNumber);

/** 8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado; */
for (let index = 1; index <= 25; index++) {
  console.log(index);
}
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
// Refactoring
// const arr = Array.from({ length: 25 }, (value, index) => index + 1);
// console.log(arr);

/** 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .  */
// arr.forEach((el) => console.log(el/2));

/** BONUS */
/** 1. Ordene em ordem crescente e imprima seus valores; */
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);

/** 2. Ordene o array numbers em ordem decrescente e imprima seus valores; */
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);

/** 3.  */
let newArr = [];
for (let index = 0; index < numbers.length; index ++) {
  if (index + 1 < numbers.length) {
    // console.log(numbers[index]);
    newArr[index] = numbers[index] * numbers[index + 1];
  } else {
    newArr.push(numbers[index] * 2)
  }
  
}
console.log(newArr);