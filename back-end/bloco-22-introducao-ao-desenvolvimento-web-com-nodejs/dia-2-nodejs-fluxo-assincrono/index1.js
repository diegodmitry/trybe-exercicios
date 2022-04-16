function getRandomNumber() {
    return Math.floor(Math.random() * 100 + 1);
};

function callDoMath() {
    /* Criamos um novo array de 3 posições e utilizamos o `map` para gerar um número aleatório para cada posição do Array */
    // const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);

    const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
    callDoMath(...randomNumbers)
        .then(result => console.log(result))
        .catch(err => console.error(err.message))
};

