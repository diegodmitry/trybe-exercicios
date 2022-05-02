const isValidCEP = require('../services/Cep');
const getCEPBD = require('../models/Cep');

const getCEP = async (req, res) => {
  const { cep } = req.params;

  const brCEP = isValidCEP(cep);
  if(!brCEP) return res.status(400).json({ "error": { "code": "invalidData", "message": "CEP inválido" } });
  const [cepBD] = await getCEPBD(cep);
  if(cepBD.length === 0) return res.status(404).json({ "error": { "code": "notFound", "message": "CEP não encontrado" } });
  
  return res.status(200).json(...cepBD);
};

module.exports = {getCEP};