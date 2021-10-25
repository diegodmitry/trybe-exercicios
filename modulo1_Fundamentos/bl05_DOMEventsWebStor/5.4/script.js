const body = document.querySelector("body");
const optionBackgroundColor = document.querySelectorAll(".backgroundColor");
const optionTextColor = document.querySelectorAll(".textColor");
const optionFontSize = document.querySelectorAll(".fontSize");
const optionFontFamily = document.querySelectorAll(".fontFamily");
console.log(optionFontFamily);


// Set
const setBckgroundColor = () => {
  for (let i = 0; i < optionBackgroundColor.length; i++) {
    optionBackgroundColor[i].addEventListener("click", (e) => {
      body.style.backgroundColor = e.target.value;
      localStorage.setItem("backgroundColor", JSON.stringify(e.target.value));
    });
  }
};

const setTextColor = () => {
  for (let i = 0; i < optionTextColor.length; i++) {
    optionTextColor[i].addEventListener("click", (e) => {
      body.style.color = e.target.value;
      localStorage.setItem("textColor", JSON.stringify(e.target.value));
    });
  }
};

const setFontSize = () => {
  for (let i = 0; i < optionFontSize.length; i++) {
    optionFontSize[i].addEventListener('click', (e) => {
      body.style.fontSize = `${e.target.value}px`;
      localStorage.setItem("fontSize", JSON.stringify(e.target.value));
    })
  }
};

const setFontFamily = () => {
  for (let i = 0; i < optionFontFamily.length; i++) {
    optionFontFamily[i].addEventListener('click', (e) => {
      body.style.fontFamily = e.target.value;
      localStorage.setItem("fontFamily", JSON.stringify(e.target.value));
    })
  }
};


// Get
const getBckgColor = () => {
  const color = JSON.parse(localStorage.getItem("backgroundColor"));
  body.style.backgroundColor = color;
};

const getTextColor = () => {
  const color = JSON.parse(localStorage.getItem("textColor"))
  body.style.color = color;
};

const getFontSize = () => {
  const fontSize = JSON.parse(localStorage.getItem("fontSize"));
  body.style.fontSize = `${fontSize}px`;
};

const getFontFamily = () => {
  const fontFamily = JSON.parse(localStorage.getItem("fontFamily"));
  body.style.fontFamily = fontFamily;
};


function initialRenderization() {
  if (localStorage.getItem("backgroundColor") === null) {
    localStorage.setItem("backgroundColor", JSON.stringify([]));
  } else {
    setBckgroundColor();
    setTextColor();
    setFontSize();
    setFontFamily();
    getBckgColor();
    getTextColor();
    getFontSize();
    getFontFamily();
  }
}
initialRenderization();
