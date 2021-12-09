const sum = (a, b) => a + b;

const math = (product, callback) => {
  return `The sum of ${product} was ${callback}`;
};
// 1.
console.log(math('coffe', sum(1, 2)));

// 2.
const lg = (name) => console.log(name);
const string = (name, callback) => {
  callback(name);
};

string('santos', (str) => {
  console.log(str);
})
string('diego', lg);