/** Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.  */
const salarioBruto = 3000.0;
let aliquota;
let inss;
let salarioBase;
let aliquotaImpostoDeRenda;
if (salarioBruto < 1556.94) {
  aliquota = 8 / 100;
  inss = aliquota * salarioBruto;
  salarioBase = salarioBruto - inss;
  console.log(
    `Aliquota de ${aliquota}% de R$${salarioBruto.toFixed(
      2
    )}, ou seja, R$${inss.toFixed(2)}`
  );
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  aliquota = 9 / 100;
  inss = aliquota * salarioBruto;
  salarioBase = salarioBruto - inss;
  console.log(`O salário base é ${salarioBase}`);
  console.log(
    `Aliquota de ${aliquota}% de R$${salarioBruto.toFixed(
      2
    )}, ou seja, R$${inss.toFixed(2)}`
  );
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  aliquota = 11 / 100;
  inss = aliquota * salarioBruto;
  salarioBase = salarioBruto - inss;
  aliquotaImpostoDeRenda = 7.5 / 100;
  const valorIR = (aliquotaImpostoDeRenda * salarioBase) - 142.8;
  console.log(`${salarioBase - valorIR}`);
  console.log(`Salario base: ${salarioBase}`);
  console.log(
    `Aliquota de ${aliquota}% de R$${salarioBruto.toFixed(
      2
    )}, ou seja, R$${inss.toFixed(2)}`
  );
} else {
  aliquota = 570.88;
  console.log(salarioBruto - aliquota);
  inss = aliquota;
  console.log('inss', inss);
  salarioBase = salarioBruto - inss;
  console.log('Salario base', salarioBase);
  aliquotaImpostoDeRenda = 22.5 / 100;
  console.log(aliquotaImpostoDeRenda);
  const valorIR = (aliquotaImpostoDeRenda * salarioBase) - 636.13;
  console.log(valorIR);
  console.log(`Salário base é R$${salarioBase}, o IR é: R$${valorIR}. ${salarioBase - valorIR}`);
  // console.log(`Total de: ${}`);
  console.log(`Aliquota máxima de R$${aliquota}`);
}
