import connection from '../models/connection';
import { NotFoundError } from 'restify-errors';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';

class UserService {
  public model: UserModel;

  MESSAGES = {
    USER_NOT_FOUND: 'User not found',
    UNAUTHORIZED: 'Invalid email or password',
    USER_EXISTS: 'User already exists',
  };

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<User[]> {
    const users = await this.model.getAll();
    return users;
  }

  public async getById(id: number): Promise<User> {
    const user = await this.model.getById(id);
    return user;
  }

  public async create(user: User) {
    const userExists = await this.model.getByEmail(user.email);
    // check there is email
    if (userExists) return { status: 400, error: { message: this.MESSAGES.USER_EXISTS } };

    const data = await this.model.create(user);
    return { status: 201, data }
  }

  public async update(id: number, user: User) {
    const userFound = await this.model.getById(id);
    if (!userFound) {
      throw new NotFoundError('NotFoundError');
    }

    return this.model.update(id, user);
  }

  public async delete(id: number) {
    const userFound = await this.model.getById(id);
    console.log("🚀 ~ file: user.services.ts ~ line 49 ~ UserService ~ delete ~ userFound", userFound)
    if (!userFound) {
      throw new NotFoundError('NotFoundError');
    }

    return this.model.delete(id);
  }
}

export default UserService;