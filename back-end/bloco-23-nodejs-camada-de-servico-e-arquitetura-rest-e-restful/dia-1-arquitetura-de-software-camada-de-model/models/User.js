const connection = require('./connection');

const getAllUsers = async () => {
  const query = 'SELECT * FROM users';

  return await connection.execute(query);
};

const create = async ({ firstName, lastName, email, password }) => {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)';

  // console.log(firstName, lastName, email, password);
  return await connection.execute(query, [firstName, lastName, email, password]);
};

const update = async (id, { firstName, lastName, email, password }) => {
  const query = ` UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ? `;

  await connection.execute(query, [firstName, lastName, email, password, id]);

  return findById(id);
};

module.exports = { getAllUsers, create, update };