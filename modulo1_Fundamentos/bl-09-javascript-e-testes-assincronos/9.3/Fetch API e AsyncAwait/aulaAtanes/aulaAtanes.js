const pokemons = ['ditto', 'charmander', 'bulbasaur', 'squirtle', 'pikachu', 'porygon', 'mewtwo'];

function append(data) {
  const ol = document.querySelector('ol');

  const li = document.createElement('li');
  const divNome = document.createElement('div');
  const divImage = document.createElement('div');
  const img = document.createElement('img');

  divNome.innerHTML = data.nome;
  img.src = data.imageUrl;
  divImage.appendChild(img);

  li.appendChild(divNome);
  li.appendChild(divImage);

  ol.appendChild(li);
}

function extractNameAndImage(pokemonData) {
  return {
    nome: pokemonData.name,
    imageUrl: pokemonData.sprites.front_default,
  };
}
function fetchPokemonData(nomePokemon) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`).then((response) =>
    response.json()
  );
}

function fetchPokemon(nomePokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)
    .then((response) => response.json())
    .then((data) => {
      append(extractNameAndImage(data));
    })
    .catch((erro) => console.log('Ocorreu um erro no acesso a API', erro));
}

// function requestOrderedPokemons() {
//   Promise.all([
//     fetchPokemonData('bulbasaur'),
//     fetchPokemonData('charmander'),
//     fetchPokemonData('pikachu'),
//     fetchPokemonData('mewtwo'),
//   ])
//     .then((pokemonDataList) => pokemonDataList.map(extractNameAndImage))
//     .then((pokemonList) => pokemonList.forEach(append))
//     .catch((erro) => console.log('Ocorreu um erro no acesso a API', erro));
// }

async function fetchPokemonAsyncAwait(){
  try {
    const pokemonDataList = [
      await fetchPokemonData('bulbasaur1'),
      await fetchPokemonData('charmander'),
      await fetchPokemonData('pikachu'),
      await fetchPokemonData('mewtwo'),
      await fetchPokemonData('ditto'),
    ]
      
    const pokemonList = pokemonDataList.map(extractNameAndImage);
    pokemonList.forEach(append);
  } catch (error) {
    console.log('Ocorreu um erro no acesso a API', error)
  }
  
}

function requestPokemons() {
  fetchPokemon('bulbasaur');
  fetchPokemon('charmander');
  fetchPokemon('squirtle');
  fetchPokemon('pikachu');
  fetchPokemon('mewtwo');
}

// window.onload = fetchPokemonAsyncAwait;