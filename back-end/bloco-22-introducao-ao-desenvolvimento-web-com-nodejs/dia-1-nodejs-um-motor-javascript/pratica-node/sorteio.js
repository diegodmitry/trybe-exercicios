const readlineSync = require('readline-sync');

const sweepstake = () => {
    const randomNumber = Math.floor(Math.random() * 11);
    const answerUser = readlineSync.questionInt('Adivinhe o número: ');
    if(randomNumber === answerUser) console.log('Congrats!');
    if(randomNumber !== answerUser) console.log(`Ỳou made mistake, the correct number is: ${randomNumber}`);
    if(answerUser > 10) console.log('You need type a number between 0 and 10');
    const secondAnswer = readlineSync.question('Would you like trying again? ');
    if(secondAnswer.toLowerCase() === "yes") sweepstake();
};
module.exports = sweepstake;