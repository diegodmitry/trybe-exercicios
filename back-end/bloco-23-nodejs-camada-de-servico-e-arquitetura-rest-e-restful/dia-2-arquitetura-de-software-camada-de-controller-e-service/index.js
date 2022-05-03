const express = require('express');
const app = express();
const port = 3000;

const ping = require('./controllers/Ping');
const { getCEP, postCEP } = require('./controllers/Cep');



app.use(express.json());


app.get('/ping', ping);

app.get('/cep/:cep', getCEP);

// const cepSchema = Joi.object({
//   cep: Joi.string().required(),
//   logradouro: Joi.string().required(),
//   bairro: Joi.string().required(),
//   localidade: Joi.string().required(),
//   uf: Joi.string().required(),
// });

// const validationPost = (cep, logradouro, bairro, localidade, uf) => {

//   const {error} = cepSchema.validate({cep, logradouro, bairro, localidade, uf});
//   console.log('cep', cep);
//   if(error === undefined) return true;
//   const [ errorMsg ] = error.details;

//   if(errorMsg) return errorMsg;
  
// };

// app.post('/cep', async (req, res) => {
//   const { cep, logradouro, bairro, localidade, uf } = req.body;

//   const cepClean = cleanCep(cep);

//   const validPost = validationPost(cepClean, logradouro, bairro, localidade, uf);
  
//   if(validPost.message) return res.status(400).json({ "error": { "code": "invalidData", "message": `msgPersonal` } });

//   try {
//     await Cep.create(cep, logradouro, bairro, localidade, uf);
//   } catch (error) {
//     console.error(error.message);
//     return res.status(409).json({ "error": { "code": "alreadyExists", "message": "CEP já existente" } })
//   }
//   return res.status(201).json({ cep, logradouro, bairro, localidade, uf })
// });
app.post('/cep', postCEP);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));