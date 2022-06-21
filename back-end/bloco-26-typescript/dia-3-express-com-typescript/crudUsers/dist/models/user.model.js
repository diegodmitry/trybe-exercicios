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
Object.defineProperty(exports, "__esModule", { value: true });
class UserModel {
    constructor(connection) {
        this.connection = connection;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT * FROM Users';
            const result = yield this.connection.execute(query);
            const [users] = result;
            return users;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT * FROM Users WHERE id = ?';
            const result = yield this.connection.execute(query, [id]);
            const [rows] = result;
            const [user] = rows;
            return user;
        });
    }
    getByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT * FROM Users WHERE email = ?';
            const values = [email];
            const [data] = yield this.connection.execute(query, values);
            const [user] = data;
            return user || null;
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = user;
            const query = 'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)';
            const values = [name, email, password];
            const result = yield this.connection.execute(query, values);
            const [dataInserted] = result;
            const { insertId } = dataInserted;
            const newUser = { id: insertId, name, email, password };
            return newUser;
        });
    }
    ;
    update(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = user;
            const query = 'UPDATE Users SET name = ?, email = ?, password = ? WHERE id = ?';
            const values = [name, email, password, id];
            yield this.connection.execute(query, values);
            const updatedUser = { id, name, email, password };
            return updatedUser;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'DELETE FROM Users WHERE id=?';
            yield this.connection.execute(query, [id]);
        });
    }
}
exports.default = UserModel;
