const connection = require("./connection");

const getCep = async (cep) => {
  console.log('recebendo o cep no bd', cep);

  try {
    const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?;';  
    return await connection.execute(query, [cep]);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getCep;