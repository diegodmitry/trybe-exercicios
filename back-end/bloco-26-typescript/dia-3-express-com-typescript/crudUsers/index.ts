import express, { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import errorHandler from './middlewares/Error';
import UserRoutes from './routes/user.routes';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (_req: Request, res: Response) => res.status(StatusCodes.OK).send('Users Routes'));

app.use(UserRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server is listening on port ${port}!`));