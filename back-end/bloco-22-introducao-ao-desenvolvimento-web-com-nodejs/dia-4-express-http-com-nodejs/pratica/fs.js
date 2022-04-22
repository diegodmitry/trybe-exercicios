const fs = require('fs');

// function getSimpsons() {
//   return fs.readFile('./simpsons.json', 'utf-8')
//     .then(fileContent => JSON.parse(fileContent));
// };

function getSimpsons() {
  const data = fs.readFileSync('./simpsons.json', 'utf-8');
  return JSON.parse(data);
};

function setSimpsons (newSimpsons) {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}

module.exports = { getSimpsons, setSimpsons };