// 1.
const n = 5; // row or column count
let ast = ""; // Defining a empty string
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    // creating line with 5 stars
    ast += "*";
  }
  // after create 5 stars, create new line
  ast = ast + "\n";
}
console.log(ast);

// 2.
const n1 = 5;
let tri = "";
for (let i = 0; i < n1; i++) {
  tri = tri + "*";
  console.log(tri);
}

// 3.
const n2 = 5;
let triUpsideDown = "";
// The external loop will execute internal loops for 'n' times
// and the internal loops will design a pattern for each row
for (let i = 0; i <= n2; i++) {
  // console.log(i);

  // printing spaces
  // the number of spaces in a row is (n - i) in each row
  for (let j = 0; j < n - i; j++) {
    triUpsideDown = triUpsideDown + " ";
    // console.log('n-1', (n - i));
    // console.log('spaces');
  }

  // printing stars
  for (let k = 0; k < i; k++) {
    triUpsideDown = triUpsideDown + "*";
    // console.log('stars');
  }

  // after run each internal loops some times, create new line
  triUpsideDown += "\n";
}
console.log(triUpsideDown);

// 4.
const n3 = 5;
let pyr = "";
// External loop
for (let i = 0; i < n3 - 1; i++) {
  // printing spaces
  for (let j = 0; j < n3 - i; j++) {
    pyr = pyr + " ";
  }

  // the number of stars in a row is (2 * i - 1)
  for (let k = 0; k < 2 * i - 1; k++) {
    pyr = pyr + "*";
  }

  // new line
  pyr += "\n";
}
console.log(pyr);

// 5.
const n4 = 7;
let hPyr = "";
// External Loop
for (let i = 1; i <= n4 - 3; i++) {
  // printing spaces
  for (let j = 1; j <= n4 - i; j++) {
    hPyr += " ";
  }
  
  // printing stars
  for (let k = 0; k <  2 * i - 1; k++) {
    if (i === 1 || i === (n4 - 3)) {
      hPyr += '*' // base
    } else {
      if (k === 0 || k === 2 * i - 2) {
        hPyr += '*';
      } else {
        hPyr += ' ';
      }
    }    
  }

  hPyr += '\n'
}
console.log(hPyr);

// Source: https://www.tutorialstonight.com/js/javascript-star-pattern.php

// 6.

const n5 = 50;
for (let i = 0; i <= n5; i++) {
  
  if(n5 < 2) {
    return console.log('Número menor que 2 não é primo');
  }
  
  if (n5 % 2 === 0 || n5 % 3 === 0) {
    return console.log(`O númenro ${n5} não é primo.`);
  }

  if(n5 % 2 !== 0) {
    return console.log(`O número ${n5} é primo`);
  }
  
}