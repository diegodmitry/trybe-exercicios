const charToInt = (char) => {

  // 1. Comparing with number
  if (char === "I") {
    return 1;
  } else if (char === "V") {
    return 5;
  } else if (char === "X") {
    return 10;
  } else if (char === "L") {
    return 50;
  } else if (char === "C") {
    return 100;
  } else if (char === "D") {
    return 500;
  } else if (char === "M") {
    return 1000;
  } else {
    console.error("Invalid parameter");
  }
};

const transformRomToNum = (romansNum) => {
  // 1. Splitting the first character
  let char = charToInt(romansNum[0]);

  // 2. Declaring variables to use in for
  let prevChar, nextChar;

  for (let i = 1; i < romansNum.length; i++) {

    // 3. Selecting according with index
    prevChar = charToInt(romansNum.charAt(i - 1));
    nextChar = charToInt(romansNum[i]);

    //4. Check if the next character is less than or equal to the previous character
    if (nextChar <= prevChar) {
      char += nextChar;
    } else {
      // This line will be executed if the next character is greater than the previous one
      char = char - prevChar * 2 + nextChar;
    }

  }
  console.log("Result:", char);
};

transformRomToNum("VI");
