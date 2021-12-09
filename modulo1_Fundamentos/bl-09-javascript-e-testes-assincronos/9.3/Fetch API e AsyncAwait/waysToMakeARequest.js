// 1.
// // Create a request variable and assign a new XMLHttpRequest object to it.
// var request = new XMLHttpRequest()

// // Open a new connection, using the GET request on the URL endpoint
// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

// request.onload = function () {
//   // Begin accessing JSON data here
// }

// // Send request
// request.send()

// 2.Alternatively, you can use the fetch API and async/await.
async function getData() {
  try {
    const response = await fetch('https://ghibliapi.herokuapp.com/films')
    console.log(response);
    // data is a variable that contains an array with object
    const data = await response.json()
  } catch (error) {
    console.error('There is some problem with API', error);
  }
}
// getData()