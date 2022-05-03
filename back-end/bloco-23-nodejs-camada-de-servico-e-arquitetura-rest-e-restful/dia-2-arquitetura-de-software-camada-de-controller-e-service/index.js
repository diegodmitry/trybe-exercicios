const express = require('express');
const app = express();

const ping = require('./controllers/Ping');
const { getCEP, postCEP } = require('./controllers/Cep');

app.use(express.json());


app.get('/ping', ping);

app.get('/cep/:cep', getCEP);

app.post('/cep', postCEP);

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));