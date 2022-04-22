const express = require('express');
const fsSimpsons = require('./fs');
const app = express();
const port = 2525;

const simpsons = require('./simpsons.json');
const generateToken = require('./generateToken');
const authMiddleware = require('./authMiddleware');
// console.log(generateToken())

app.use(express.json());
app.use(authMiddleware);

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
  if (age <= 17) return res.status(401).json({ "message": "Unauthorized" });
  next();
};

app.post('/greetings', conditionalAge, (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ "message": `Hello, ${name}!` });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  return res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade.` });
});

app.get('/simpsons', (_req, res) => {
  return res.status(200).json(simpsons);
});

app.get(
  '/simpsons/:id',
  (req, res) => {
    try {
      const simpsons = fsSimpsons.getSimpsons();
      const simpson = simpsons.find(({ id }) => id === req.params.id);
      if (!simpson) {
        // não esqueça de adicionar o return para impedir de que seu código continue.
        return res.status(404).json({ message: 'simpson not found' });
      }
      return res.status(202).json(simpson);
    } catch (error) {
      return res.status(500).end();
    }
  }
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));