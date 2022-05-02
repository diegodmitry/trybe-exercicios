const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: 'diegodev',
  host: 'localhost',
  database: 'cep_lookup'
});

module.exports = connection;