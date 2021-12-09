const { log } = require('console');
const fetch = require('node-fetch');

// then
// const fetchJoke = () => {
//   const url = 'https//api.chucknorris.io/jokes/random?category=dev';

//   console.log(fetch(url));

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value))
//     .catch((error) => console.error('Sem acesso:', error));
// };

// fetchJoke();

// async/await
const fetchJoke = async () => {
  const url = 'https//api.chucknorris.io/jokes/random?category=dev';

  console.log(fetch(url));

  try {
    const response =  await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch (e) {
    console.error('Sem acesso:', e);
  }

  return data;
};

fetchJoke();