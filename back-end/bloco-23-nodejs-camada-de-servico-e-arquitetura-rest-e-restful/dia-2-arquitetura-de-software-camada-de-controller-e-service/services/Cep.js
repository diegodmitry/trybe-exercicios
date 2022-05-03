const Joi = require('joi');

const isValidCEP = (cep) => {
  const pattern = /[0-9]{5}-?[\d]{3}/g
  return pattern.test(cep);
};

const cleanCep = (cep) => {
  const isValidCep = isValidCEP(cep);
  if(isValidCep) return cep.replaceAll("-", "").replaceAll(".", "");
};


const cepSchema = Joi.object({
  cep: Joi.string().required(),
  logradouro: Joi.string().required(),
  bairro: Joi.string().required(),
  localidade: Joi.string().required(),
  uf: Joi.string().required(),
});

const validationPost = (cep, logradouro, bairro, localidade, uf) => {

  const {error} = cepSchema.validate({cep, logradouro, bairro, localidade, uf});
  console.log('cep', cep);
  if(error === undefined) return true;
  const [ errorMsg ] = error.details;

  if(errorMsg) return errorMsg;
  
};


module.exports = { isValidCEP, cleanCep, validationPost };