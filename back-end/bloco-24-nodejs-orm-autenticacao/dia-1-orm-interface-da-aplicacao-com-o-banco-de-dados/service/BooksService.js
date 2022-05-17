const { Book } = require("../models/Book");

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  if(!id) throw new Error('Book not found');
  return book;
};

const create = async ({ title, author, pageQuantity }) => {
  if(!title || !author || !pageQuantity) throw new Error('incomplete field');
  const newBook = Book.create({ title, author, pageQuantity });
  return newBook;
};

const update = async (id, { title, author, pageQuantity }) => {
  if(isNaN(+id)) throw new Error('you need type number');
  if(!title || !author || !pageQuantity) throw new Error('incomplete field');
  const [ updatedBook ] = await Book.update({
    title,
    author,
    pageQuantity,
  },{
    where: { id },
  });
  console.log(updatedBook);
  if(!updatedBook) throw new Error('book not found');
  return updatedBook;
};

const remove = async (id) => {
  if(isNaN(+id)) throw new Error('you need type number');
  const deleteBook = await Book.destroy({ where: { id }});
  if(!deleteBook) throw new Error('Book not found');
  console.log(deleteBook);
  return deleteBook;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};