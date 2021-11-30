const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];
// const errorFunction = (error) => error;
// const filter = (element) => element === element;
function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    // console.log(filter);
    if (pokemons.find(filter) === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const pokemon = pokemons.find(filter);
    // console.log(pokemon);
    const { name, type, ability } = pokemon;
    // console.log(name, type, ability);
    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 100);
}

getPokemonDetails(
  (element) => element.name === 'Squirtle',
  (error, msg) => {
    if (error) console.log(error);
      else console.log(msg);
  }
);

module.exports = {
  getPokemonDetails,
};
