// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./task8');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    
    const expectError = new Error('Não temos esse pokémon para você :(');

    function callback (error, msg) {
      expect(error).toEqual(expectError);
      done();
    }

    getPokemonDetails((element) => element.name === 'Pikachu', callback)
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    
    const result = `Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf`;

    const callback = (error, msg) => {
      expect(msg).toEqual(result);
      done();
    };

    getPokemonDetails((element) => element.name === 'Bulbasaur', callback)


  });
});
