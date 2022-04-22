const express = require('express');
// 1. Cria uma aplicacao express
const app = express();

// 2. Dizer ao Express que, quando uma requisição com método GET for recebida no caminho /hello , a função deve ser executada
app.get('/hello', funcaoChamadaNoCaminhoHello);

/* Rota com caminho '/', utilizando o método POST */
app.post('/', function (req, res) {
  res.send('hello world');
});
/* Rota com caminho '/', utilizando o método PUT */
app.put('/', function (req, res) {
  res.send('hello world');
});
/* Rota com caminho '/', utilizando o método DELETE */
app.delete('/', function (req, res) {
  res.send('hello world');
});
/* Rota com caminho '/' para qualquer método HTTP */
app.all('/', function (req, res) {
  res.send('hello world');
});
/* Ou podemos encadear as requisições para evitar repetir o caminho */
app
  .route('/')
  .get(function (req, res) {
    // Requisições para rota GET `/` são resolvidas aqui!
    res.send('hello world get');
  })
  .post(function (req, res) {
    // Requisições para rota POST `/` são resolvidas aqui!
    res.send('hello world post');
  });

// 3. Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3001
app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

// 4. Ao tratar uma requisição com método GET no caminho /hello , enviar o status HTTP 200 que significa OK e a mensagem "Hello world!".
function funcaoChamadaNoCaminhoHello(_request, response) {
  response.status(200).send('Hello world!');
};

