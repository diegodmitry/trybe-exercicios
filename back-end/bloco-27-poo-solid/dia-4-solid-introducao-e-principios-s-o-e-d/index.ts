import express from 'express';
import plantsRouter from './router/plantsRouter';
require('dotenv').config();

const app = express();

// Without `express.json()`, `req.body` is undefined.
app.use(express.json());

app.use('/', plantsRouter)

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log('Example app listening on port 3000!'),
);