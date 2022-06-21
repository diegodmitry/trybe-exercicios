"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const user_validation_1 = __importDefault(require("../middlewares/user.validation"));
const router = (0, express_1.Router)();
const userController = new user_controller_1.default();
router.get('/users', userController.getAll);
router.get('/users/:id', userController.getById);
router.delete('/users/:id', userController.delete);
router.post('/users', user_validation_1.default, userController.create);
router.put('/users/:id', user_validation_1.default, userController.update);
exports.default = router;
