const { expect } = require("@jest/globals");

let cities = [];

const addCity = (city) => {
  cities.push(city);
};

const removeCity = (city) => {
  cities = cities.filter((eachCity) => eachCity !== city);
};

test('Test addCity function', () => {
  expect.assertions(4);
  addCity('Natal');
  addCity('Parnamirim');
  addCity('Caicó');

  expect(cities).toHaveLength(3);
  expect(cities.length).toBe(3);
  expect(cities).toContain('Parnamirim');
  expect(cities).toContain('Caicó');
})

test('Test removeCity function', () => {
  expect.assertions(4);
  removeCity('Parnamirim');

  expect(cities).toHaveLength(2);
  expect(cities).not.toContain('Parnamirim')
  expect(cities).toContain('Natal')
  expect(cities).toContain('Caicó')
})