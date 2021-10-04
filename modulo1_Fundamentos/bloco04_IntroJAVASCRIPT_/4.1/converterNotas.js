/**Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.  */
const studentGrade = 101;

if (studentGrade > 100 || studentGrade < 0) {
  console.error(`Number greater than 100 or less than 0`)
} else {
  if (studentGrade >= 90) {
    console.log(`Your grade is A.`);
  } else if(studentGrade >= 80) {
    console.log(`Your grade is B.`);
  } else if(studentGrade >= 70) {
    console.log(`Your grade is C.`);
  } else if(studentGrade >= 60) {
    console.log(`Your grade is D.`);
  } else if(studentGrade >= 50) {
    console.log(`Your grade is D.`);
  } else {
    console.log(`Your grade is F.`)
  }
}