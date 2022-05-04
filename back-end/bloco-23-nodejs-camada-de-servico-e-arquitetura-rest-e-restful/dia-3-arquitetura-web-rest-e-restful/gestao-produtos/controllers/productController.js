const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (_req, res) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if (product === null) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  if (name === undefined || brand === undefined) {
    return res.status(404).json({ message: 'Informações do produto inválidas' });
  }

  const newProduct = await ProductModel.add(name, brand);
  res.status(201).json(newProduct);
});

router.delete('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if (product === null) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  await ProductModel.exclude(req.params.id);
  res.status(204).json();
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  if (name === undefined || brand === undefined) {
    return res.status(404).json({ message: 'Informações do produto inválidas' });
  }

  const product = await ProductModel.getById(req.params.id);
  if (product === null) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  await ProductModel.update(req.params.id, name, brand);
  res.status(200).json({ name, brand });
});

// router.get('/list-products', async (req, res) => {
//   const products = await ProductModel.getAll();

//   res.send(products);
// });

// router.get('/get-by-id/:id', async (req, res) => {
//   const product = await ProductModel.getById(req.params.id);

//   res.send(product);
// });

// router.post('/add-product', async (req, res) => {
//   const { name, brand } = req.body;

//   const newProduct = await ProductModel.add(name, brand);

//   res.send(newProduct);
// });

// router.post('/delete-product/:id', async (req, res) => {
//   const products = await ProductModel.exclude(req.params.id);

//   res.send(products);
// });

// router.post('/update-product/:id', async (req, res) => {
//   const { name, brand } = req.body;

//   const products = await ProductModel.update(req.params.id, name, brand);

//   res.send(products);
// });

module.exports = router;