const readlineSync = require('readline-sync');

function calculaVelocidadeMed() {
  const distancia = readlineSync.questionInt('Distância percorrida (m): ');
  const tempo = readlineSync.questionInt('Tempo gasto (s): ');

  const velocidadeMedia = (distancia / tempo).toFixed(2);

  console.log(`Velocidade média: ${velocidadeMedia} m/s`);
  console.log(`Velocidade média: ${(velocidadeMedia * 3.6).toFixed(2)} km/h`);

}
calculaVelocidadeMed();
