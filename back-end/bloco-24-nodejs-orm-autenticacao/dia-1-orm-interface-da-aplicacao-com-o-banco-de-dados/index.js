const express = require('express');
const BooksControllers = require('./controllers/BooksControllers');
const app = express();


app.use(express.json());

app.get('/books', BooksControllers.getAll);

app.get('/books/:id', BooksControllers.getById);

app.post('/books', BooksControllers.create);

app.put('/books/:id', BooksControllers.update);

app.delete('/books/:id', BooksControllers.remove);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listen on port: ${PORT}`));
