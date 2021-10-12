let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// 1. Imprima no console uma mensagem de boas-vindas para a personagem acima.
console.log(`Bem-vinda, ${info.personagem}`);

// 2.  Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
info['recorrente'] = 'Sim';
console.log(info);

// 3. Faça um for/in que mostre todas as chaves do objeto.
for (const key in info) {
  console.log(key);
}

// 4.  Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
for (const key in info) {
  console.log(info[key]);
}

// 5. 
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota:  "O último MacPatinhas",
  recorrente: 'Sim'
}
console.log('Exercicio 5')
for (const key in info) {
  if (info[key] === 'Sim' && info2[key] === 'Sim') {
    console.log('Ambos recorrentes');
  } else {
    console.log(`${info[key]} e ${info2[key]}`);
  }
}