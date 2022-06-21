"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const Error_1 = __importDefault(require("./middlewares/Error"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get('/', (_req, res) => res.status(http_status_codes_1.StatusCodes.OK).send('Users Routes'));
app.use(user_routes_1.default);
app.use(Error_1.default);
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
