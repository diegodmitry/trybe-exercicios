const express = require('express');
const app = express();
const port = 2525;
app.use(express.json());

const jsonMessage = [
  { message: 'pong' },
];

app.get('/ping', (_req, res) => res.status(200).json(jsonMessage));

app.post('/hello', (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  console.log(name);
  return res.status(200).json({ "message": `Hello, ${name}!` });
});

const conditionalAge = (req, res, next) => {
  const { age } = req.body;
  if(age <= 17) return res.status(401).json({ "message": "Unauthorized" });
  next();
};

app.post('/greetings', conditionalAge, (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ "message": `Hello, ${name}!` });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  return res.status(200).json({"message": `Seu nome é ${name} e você tem ${age} anos de idade.`});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));