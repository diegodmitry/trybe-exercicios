const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui

  // Step 1. remove the external array 
  const [firstArray, secArray, thirdArray] = grades;
  
  // Step 2. Calc average of each array
  const firstAverage = firstArray.reduce((acc, curr) => {
    return (acc + curr);
  }) / firstArray.length
  const secondAverage = secArray.reduce((acc, curr) => {
    return (acc + curr);
  }) / secArray.length
  const thirdAverage = thirdArray.reduce((acc, curr) => {
    return (acc + curr);
  }) / thirdArray.length

  // Step 3. Put all average into array
  const arrAverage = [firstAverage, secondAverage, thirdAverage];

  // Step 4. Return the new array with students name and average
  const newArray = students.map((student, i) => {
    return {
      name: student,
      average: arrAverage[i], 
    }
  })
  console.log(newArray);
}
studentAverage()