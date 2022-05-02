const express = require('express');
const app = express();
const port = 3000;

const ping = require('./controllers/Ping');
const { getCEP } = require('./controllers/Cep');

app.use(express.json());


app.get('/ping', ping);

app.get('/cep/:cep', getCEP);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));