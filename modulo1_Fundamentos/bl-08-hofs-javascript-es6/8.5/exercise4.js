const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo

// const filterPeople = (people) => {
//   const century20 = people.filter((element) => {
//     return (element.bornIn >= 1901 && element.bornIn <= 2000 && element.nationality === 'Australian');
//   })
//   return(century20);
// };

const filterPeople = (people) => {
  const century20 = people.filter(({bornIn, nationality}) => {
    return (bornIn >= 1901 && bornIn <= 2000 && nationality === 'Australian');
  })
  return(century20);
};
console.log(filterPeople(people));