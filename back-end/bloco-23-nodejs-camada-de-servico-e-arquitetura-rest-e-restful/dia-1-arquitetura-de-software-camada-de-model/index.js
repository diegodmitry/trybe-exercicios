const express = require('express');
const Joi = require('joi');
const User = require('./models/User');
const app = express();
const port = 3000;

app.use(express.json());

const isArrayEmpty = async (_req, res, next) => {
  const [ users ] = await User.getAllUsers();
  
  if (users.length === 0) {
    return res.status(200).json([]);
  }

  next();
};
const getAllUsers = async (_req, res) => {
  const [ users ] = await User.getAllUsers();
  return res.status(200).json(users);
};

const getUserId = async (req, res) => {
  const { id } = req.params;

  let bd;
  try {
    bd = await User.getAllUsers();
  } catch (error) {
    console.log(error);
  }

  const user = bd.flat().filter((el) => el.id === +id);

  if(user.length === 0) return res.status(404).json({ message: 'User Not Found'})

  return res.status(200).json(user);
};

const validateData = async (req, res, next) => {
  // Extraímos o id do usuário da rota
  const { id } = req.params;
  // Extraímos os dados da request
  const { firstName, lastName, email, password } = req.body;

  // Pedimos que o model altere e nos devolva o usuário alterado
  const updatedUser = await User.update(id, { firstName, lastName, email, password });

  // Caso nenhum usuário seja encontrado
  if (!updatedUser) {
      // Retornamos o status 404 Not Found e uma mensagem de erro
      return res.status(404).json({ error: true, message: 'Usuário não encontrado' });
  }

  req.userUpdated = updatedUser;

  next();
};

app.get('/user', isArrayEmpty, getAllUsers);

app.get('/user/:id', getUserId)

const userSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const { error }  = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  };

  await User.create(req.body);

  return res.status(201).json({ firstName, lastName, email, password });

});

app.put('/user/:id', validateData, async (req, res) => {
  return res.status(200).json(req.userUpdated);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));