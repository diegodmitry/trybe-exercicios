// Para passar no teste preisa ser sync
// const fs = require('fs').promises;

// async function readFile(filePath) {
//   try {
//     const data = await fs.readFile(filePath);
//     console.log(data.toString());
//   } catch (error) {
//     console.error(`Got an error trying to read the file: ${error.message}`);
//   }
// }
// // readFile('./greetings.txt');

// module.exports = readFile;
const fs = require('fs');

function leArquivo(nomeDoArquivo) {
  try {
    const conteudoDoArquivo = fs.readFileSync(nomeDoArquivo, 'utf8');

    return conteudoDoArquivo;
  } catch (err) {
    return null;
  }
}

module.exports = leArquivo;