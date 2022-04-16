const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const fs = require('fs');

const rl = readline.createInterface({ input, output });

rl.question('Digite o caminho do arquivo que deseja ler: ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);
  if (answer === 'file1') {
      const result = fs.readFileSync('./file1.txt', 'utf-8');
      console.log(result);
  }

  rl.close();
});

