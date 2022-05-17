const BooksService = require('../service/BooksService');

const getAll = async (_req, res) => {
  try {
    const users = await BooksService.getAll();
    return res.status(200).json({ message: users })
  } catch (error) {
    console.log(error.message);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BooksService.getById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ message: error.message });
  }
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = BooksService.create({ title, author, pageQuantity });
    return res.status(201).json(newBook);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const updateBook = await BooksService.update(id, { title, author, pageQuantity })
    return res.status(200).json(updateBook)
  } catch (error) {
    console.log(error.message);
    if(error.message.includes('book not found')) return res.status(404).json({ message: error.message });
    return res.status(500).json('Internal server error');
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await BooksService.remove(id);
    return res.status(200).json({ message: 'Deleted book successfully'});
  } catch (error) {
    console.log(error);
    return res.status(500).json('Algo deu errado');
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};