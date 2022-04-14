const readlineSync = require('readline-sync');
const calculaIMC = require('./imc');
const sweepstake = require('./sorteio');
const calculateAverageSpeed = require('./velocidade');

const runScript = () => {
  console.log('1 - imc, 2 - sorteio, 3 - velocidade');
	const whichScript = readlineSync.questionInt('Which shoud be executed? ');
  if(whichScript === 1) calculaIMC();
  if(whichScript === 2) sweepstake();
  if(whichScript === 3) calculateAverageSpeed();
};
runScript();