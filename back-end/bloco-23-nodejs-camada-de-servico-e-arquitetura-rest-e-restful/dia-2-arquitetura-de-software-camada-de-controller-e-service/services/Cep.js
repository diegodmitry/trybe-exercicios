const isValidCEP = (cep) => {
  const pattern = /[0-9]{5}-?[\d]{3}/g
  return pattern.test(cep);
};


module.exports = isValidCEP;