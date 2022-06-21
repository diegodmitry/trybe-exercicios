import { Pool, ResultSetHeader} from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<User[]> {
    const query = 'SELECT * FROM Users';
    const result = await this.connection.execute(query);
    const [users] = result;
    return users as User[];
  }

  public async getById(id: number): Promise<User> {
    const query = 'SELECT * FROM Users WHERE id = ?';

    const result = await this.connection.execute(query, [id]);
    const [rows] = result;
    const [user] = rows as User[];
    return user;
  }

  public async getByEmail(email: string): Promise<User | null> {
    const query = 'SELECT * FROM Users WHERE email = ?';
    const values = [email];
  
    const [data] = await this.connection.execute(query, values);
    const [user] = data as User[];
  
    return user || null;
  }

  public async create(user: User): Promise<User> {
    const { name, email, password } = user;

    const query = 'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)';
    const values = [name, email, password];

    const result = await this.connection.execute<ResultSetHeader>(query, values);
    const [dataInserted] = result;
    const {insertId} = dataInserted;

    const newUser: User = { id: insertId, name, email, password };
    return newUser;
  };

  public async update(id: number, user: User): Promise<User> {
    const { name, email, password } = user;

    const query = 'UPDATE Users SET name = ?, email = ?, password = ? WHERE id = ?';
    const values = [name, email, password, id];

    await this.connection.execute(query, values);

    const updatedUser: User = { id, name, email, password };

    return updatedUser;
  }

  public async delete(id: number) {
    const query = 'DELETE FROM Users WHERE id=?';
    await this.connection.execute(query, [id]);
  }
}