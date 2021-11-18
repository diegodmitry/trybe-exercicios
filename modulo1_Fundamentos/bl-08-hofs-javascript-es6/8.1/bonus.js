const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  const randomDamage =
    Math.floor(Math.random() * (dragon.strength - 15 + 1)) + 15;
  return randomDamage;
};

const damageWarrior = () => {
  const maxDamage = warrior.strength * warrior.weaponDmg;
  const minimalDamage = warrior.strength;
  const randomDamage =
    Math.floor(Math.random() * (maxDamage - minimalDamage + 1)) + minimalDamage;
  return randomDamage;
};
// damageWarrior();
let currMageMana = mage.mana;
const damageMage = () => {
  const minMana = 15;
  const maxDamage = mage.intelligence * 2;
  const minimalDamage = mage.intelligence;
  const randomDamage =
    Math.floor(Math.random() * (maxDamage - minimalDamage + 1)) + minimalDamage;
  if (currMageMana < 15) {
    return;
  } else {
    currMageMana -= minMana;
  }
  return {
    damage: randomDamage,
    mana: currMageMana,
  };
};
console.log(currMageMana);

const gameActions = {
  // Crie as HOFs neste objeto.
  turnWarrior: (callback) => {
    const damageWarrior = callback();
    dragon.healthPoints -= damageWarrior;
  },
  turnMage: (callback) => {
    const damageMage = callback();
    dragon.healthPoints -= damageMage.damage;
    const { mana } = damageMage;
    mage.mana = mana;
  },
  turnDragon: (callback) => {
    const damageDragon = callback();
    warrior.healthPoints -= damageDragon;
    mage.healthPoints -= damageDragon;
  },
  members: (obj) => {
    return obj;
  },
};
gameActions.turnWarrior(damageWarrior);
gameActions.turnMage(damageMage);
gameActions.turnMage(damageMage);
gameActions.turnMage(damageMage);
gameActions.turnDragon(dragonDamage);
console.log(gameActions.members(battleMembers));

console.log('Dragon', dragon);
console.log('Mage', mage);
console.log('Warrior', warrior);
