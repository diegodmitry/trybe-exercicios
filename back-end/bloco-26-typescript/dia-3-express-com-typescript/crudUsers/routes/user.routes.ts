import { Router } from "express";
import UserController from "../controllers/user.controller";
import validationUser from '../middlewares/user.validation';

const router = Router();

const userController = new UserController();

router.get('/users', userController.getAll);

router.get('/users/:id', userController.getById);
router.delete('/users/:id', userController.delete);

router.post('/users', validationUser, userController.create);

router.put('/users/:id', validationUser, userController.update);


export default router;