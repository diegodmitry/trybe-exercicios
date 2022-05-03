const isValidCEP = require('../services/Cep');
const getCEPBD = require('../models/Cep');
const { cleanCep, validationPost } = require('../services/Cep');
const Cep = require('../models/Cep');

const getCEP = async (req, res) => {
  const { cep } = req.params;

  const brCEP = isValidCEP(cep);
  if(!brCEP) return res.status(400).json({ "error": { "code": "invalidData", "message": "CEP inválido" } });
  const [cepBD] = await getCEPBD(cep);
  if(cepBD.length === 0) return res.status(404).json({ "error": { "code": "notFound", "message": "CEP não encontrado" } });
  
  return res.status(200).json(...cepBD);
};

const postCEP = async (req, res) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const cepClean = cleanCep(cep);

  const validPost = validationPost(cepClean, logradouro, bairro, localidade, uf);
  
  if(validPost.message) return res.status(400).json({ "error": { "code": "invalidData", "message": `msgPersonal` } });

  try {
    await Cep.create(cep, logradouro, bairro, localidade, uf);
  } catch (error) {
    console.error(error.message);
    return res.status(409).json({ "error": { "code": "alreadyExists", "message": "CEP já existente" } })
  }
  return res.status(201).json({ cep, logradouro, bairro, localidade, uf })
}

module.exports = {getCEP, postCEP};