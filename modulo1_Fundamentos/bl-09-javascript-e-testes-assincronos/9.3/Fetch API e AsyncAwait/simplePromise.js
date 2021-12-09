const greeting = new Promise((resolve, reject) => {
  resolve('Hello!');
});

// greeting
//   .then((value) => console.log('The promise is resolved', value))
//   .catch((value) => console.log('The promise is rejected', value))
//   .finally(() => console.log('The Promise is settled, meaning it has been resolved or rejected.'));

/** A typical pattern for fetching data with then might look something like this: */
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     return {
//       data: data,
//       status: response.status,
//     };
//   })
//   .then((res) => {
//     console.log(res.data, res.status);
//   });

// ASYNC / AWAIT
// Async/Await can be used regular function or arrow function
// async function doSomethingAsynchronous() {
//   // logic
// }

// const doSomethingAsynchronous = async () => {
//   // logic
// };
// Ex:
const doSomethingAsynchronous = async () => {
  const value = await greeting;
}

// As for error handling, we can wrap any asynchronous code inside
const doSomethingAsynchronous1 = async () => {
  try {
    const value = await greeting;
    console.log('The promise is resolved', value);
  } catch (error) {
    console.log('The promise is rejected', error);
  }
}
doSomethingAsynchronous1();