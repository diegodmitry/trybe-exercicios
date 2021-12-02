// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const showJoke = ({joke}) => {
  const h2 = document.getElementById('jokeContainer');

  const p = document.createElement('p');
  p.textContent = joke;
  h2.appendChild(p);
};

const fetchJoke = () => {
  const objReq = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };
  fetch(API_URL, objReq)
    .then((response) => response.json())
    .then((data) => showJoke(data));
};

window.onload = () => fetchJoke();
