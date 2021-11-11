const switchWord = (string) => {
  // Step 1. Splitting the sentence and put into array
  const stringSplit = "Tryber x aqui!".split(' ');

  // Step 2: Check if the element is the letter x and replace
  stringSplit.forEach((el, index) => { if (el === 'x') stringSplit[index] = string; });

  // Step 3: Return array with the join() method
  return stringSplit.join(' ');
};

const skills = ['Frontend master', 'Backend master', "Architecture", "Team Work", "Run"];

const mix = (param) => {
  
  const sortSkills = skills.sort();
  
  return (`${param} Minhas cinco principais habilidades são:
    ${sortSkills.join(', ')}
    #goDiegoGo 
  `);

};
console.log(mix(switchWord("Diego")));