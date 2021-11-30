const callback = (str) => console.log(str);;
// console.log(callback('diego'));
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

uppercase('diego', callback);