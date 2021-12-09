// getData.js
const fetch = require('node-fetch');

const getSuperHero = (url) => {
  const promise = fetch(url)
    .then((response) => response.json())
    .then((hero) => hero.name)
    .catch((e) => e);
  return promise;
};

getSuperHero('https://www.superheroapi.com/api.php/4192484924171229/720').then(
  (a) => console.log(a)
); // Wonder Woman
module.exports = getSuperHero;
