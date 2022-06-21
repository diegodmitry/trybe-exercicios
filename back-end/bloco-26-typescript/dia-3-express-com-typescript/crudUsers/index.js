"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const errorHandler = require('./middlewares/Error');
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get('/', (_req, res) => res.status(http_status_codes_1.StatusCodes.OK).send('Hello World!1'));
app.use(errorHandler);
// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   const { name, message, details } = err as any;
//   console.log(`name: ${name}`);
//   switch (name) {
//     case 'ValidationError':
//       res.status(400).json({ message: details[0].message });
//       break;
//     case 'NotFoundError':
//       res.status(404).json({ message });
//       break;
//     case 'ConflictError':
//       res.status(409).json({ message });
//       break;
//     default:
//       console.error(err);
//       res.sendStatus(500);
//   }
//   next();
// });
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
