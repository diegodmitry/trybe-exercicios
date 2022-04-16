const fs = require('fs').promises;

const readFile = async () => {
    try {
        const data = await fs.readFile('./simpsons.json', 'utf-8');
        return await JSON.parse(data);
    } catch (error) {
        console.log('Arquivo não lido', error.message);
    }
}
// readFile();
const printCharacter = async () => {
    const data = await readFile();
    console.log(data.map((el) => `${el.id} - ${el.name}`));
};
// printCharacter();
const getId = async (id) => {
    try {
        const data = await readFile();
        const filterId = data.filter((el) => +el.id === id);

        if (filterId.length === 0) console.log("id não encontrado");

        console.log(...filterId);
    } catch (error) {
        console.log(error.message);
    }
};
// getId(1);

const remove10And6 = async () => {
    const data = await readFile();
    const data10 = data.filter((el) => +el.id !== 10 && +el.id !== 6);
    console.log(data10);
};
// remove10And6();

const contain1a4 = async () => {
    const file = await readFile();
    const result = file.filter((el) => +el.id <= 4);
    const data = JSON.stringify(result);
    await fs.writeFile('./simpsonFamily.json', data);
};
// contain1a4();
const addindNelsonMuntz = async () => {
    const data = await fs.readFile('./simpsonFamily.json', 'utf-8');
    const arrData = await JSON.parse(data);
    arrData.push({ id: '5', name: 'Nelson Muntz' });
    const newFile = JSON.stringify(arrData);
    await fs.writeFile('./simpsonFamily.json', newFile);
};
// addindNelsonMuntz();
const switchP = async () => {
    const data = await fs.readFile('./simpsonFamily.json', 'utf-8');
    const arrData = await JSON.parse(data);
    arrData.pop();
    arrData.push({ id: '5', name: 'Maggie Simpson' });
    const newFile = JSON.stringify(arrData);
    await fs.writeFile('./simpsonFamily.json', newFile);
    console.log(arrData);
};
switchP();