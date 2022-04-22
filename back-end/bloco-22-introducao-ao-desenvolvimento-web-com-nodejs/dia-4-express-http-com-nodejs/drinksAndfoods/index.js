const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { application } = require('express');

const app = express();

// Para uma aplicação back-end receber requisições de uma aplicação front-end, ou qualquer outra aplicação, é preciso instalar um módulo que libera o acesso da nossa API para outras aplicações. 
app.use(cors());
app.use(bodyParser.json());


const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const compare = (a, b) => {
  // if (a.name < b.name) {
  //   return -1;
  // }
  // if (a.name > b.name) {
  //   return 1;
  // }
  // return 0;
  return a.name.localeCompare(b.name)
};
const recipesSorted = recipes.sort(compare);

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];
const drinksSorted = drinks.sort(compare);

app.get('/recipes', (req, res) => {
  res.status(200).json(recipesSorted);
});

// Query String
app.get('/recipes/search', (req, res) => {
  console.log(req.query);
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipesSorted.filter((el) => el.name.includes(name)
    && el.price < parseInt(maxPrice) || el.name.includes(name) && el.price >= parseInt(minPrice));
  // const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
});
console.log(recipes);
// Buscar por id
// app.get('/recipes/:id', (req, res) => {
//   const { id } = req.params;
//   const recipe = recipesSorted.find((el) => el.id === parseInt(id));

//   if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

//   res.status(200).json(recipe);
// });
app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({ message: 'Invalid Token!' });

  res.status(200).json({ message: 'Valid Token!' });
});

// Adicionar
app.post('/recipes', (req, res) => {
  console.log(req.body);
  const { id, name, price } = req.body;
  recipes.push({ waitTime_id, waitTime_name, waitTime_price });
  res.status(201).json({ message: 'Recipe created successfully!' });
});

// Atualizar
app.put('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipesSorted.findIndex((el) => el.id === parseInt(id));

  if (recipeIndex === -1) {
    return res.status(404).json({ messafe: 'Recipe not found!' });
  };

  recipesSorted[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipesSorted.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app
  .get('/drinks', (_req, res) => {
    res.json(drinksSorted);
  }).get('/drinks/search', (req, res) => {
    const { name } = req.query;
    const filteredDrinks = drinksSorted.filter((el) => el.name.includes(name));
    res.status(200).json(filteredDrinks);
  })
  .get('/drinks/:id', (req, res) => {
    const { id } = req.params;
    const drink = drinksSorted.find((el) => el.id === parseInt(id));

    if (!drink) return res.status(404).json({ message: 'Drink not found!' });

    res.status(200).json(drink);
  });

app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.status(201).json({ message: 'Drink created successfully!' });
});

app.put('drinks/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const recipeIndex = drinksSorted.findIndex((el) => el.id === parseInt(id));

  if (recipeIndex === -1) {
    return res.status(404).json({message: 'Drink not found!'})
  }
});

app.delete('drinks/:id', (req, res) => {
  const { id } =req.params;
  const recipeIndex = recipesSorted.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Drink not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
  console.log('Aplicacao ouvindo na porta 3001');
});
