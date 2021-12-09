let count = 0;
// if (count === 5) count === null;
// clearInterval(count);
// setInterval(() => {
//   count += 1;
//   console.log(count);
// }, 1000);

const counter = setInterval(() => console.log((count += 1)), 1000);
const stop = () => clearInterval(counter);

setTimeout(stop, 3025);
