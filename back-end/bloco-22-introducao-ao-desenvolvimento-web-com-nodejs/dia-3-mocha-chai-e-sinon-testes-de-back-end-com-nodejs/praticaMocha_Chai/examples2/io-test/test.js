const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');
// const readFile = require('./index');
const leArquivo = require('./index');


// O arquivo de teste não precisa chamar a funcao,
// pois existe o sinon

// para passar neste teste a leitura do arquivo precisa ser sync.

const CONTEUDO_DO_ARQUIVO = 'hello, hola, bonjour, hallo';

sinon.stub(fs, 'readFile').returns(CONTEUDO_DO_ARQUIVO);

describe('leArquivo', () => {
  describe('Quando o arquivo existe', () => {
    describe('a resposta', () => {
      const resposta = leArquivo('greetings.txt');
      console.log(resposta);

      it('é uma string', () => {
        expect(resposta).to.be.a('string');
      });

      it('é igual ao conteúdo do arquivo', () => {
        before(() => {
          sinon
            .stub(fs, 'readFileSync')
            .throws(new Error('Arquivo não encontrado'));
        });
        expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
      });
    });
  });

  describe('Quando o arquivo não existe', () => {
    it('a resposta é igual a "null"', () => {
      const resposta = leArquivo('arquivo_que_nao_existe.txt');

      expect(resposta).to.be.equal(null);
    });
  });
});