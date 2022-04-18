const fs = require('fs');

const escrevaArquivo = (nomeDoArquivo, conteudoDoArquivo) => {
  fs.writeFileSync(`${__dirname}/${nomeDoArquivo}`, conteudoDoArquivo);

  return 'ok';
};

module.exports = escrevaArquivo;