"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../models/connection"));
const restify_errors_1 = require("restify-errors");
const user_model_1 = __importDefault(require("../models/user.model"));
class UserService {
    constructor() {
        this.MESSAGES = {
            USER_NOT_FOUND: 'User not found',
            UNAUTHORIZED: 'Invalid email or password',
            USER_EXISTS: 'User already exists',
        };
        this.model = new user_model_1.default(connection_1.default);
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.model.getAll();
            return users;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.model.getById(id);
            return user;
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userExists = yield this.model.getByEmail(user.email);
            // check there is email
            if (userExists)
                return { status: 400, error: { message: this.MESSAGES.USER_EXISTS } };
            const data = yield this.model.create(user);
            return { status: 201, data };
        });
    }
    update(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userFound = yield this.model.getById(id);
            if (!userFound) {
                throw new restify_errors_1.NotFoundError('NotFoundError');
            }
            return this.model.update(id, user);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userFound = yield this.model.getById(id);
            console.log("🚀 ~ file: user.services.ts ~ line 49 ~ UserService ~ delete ~ userFound", userFound);
            if (!userFound) {
                throw new restify_errors_1.NotFoundError('NotFoundError');
            }
            return this.model.delete(id);
        });
    }
}
exports.default = UserService;
