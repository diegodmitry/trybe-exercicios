const body = document.querySelector("body");
const optionBackgroundColor = document.querySelectorAll(".backgroundColor");

const setBckgroundColor = () => {
  for (let i = 0; i < optionBackgroundColor.length; i++) {
    optionBackgroundColor[i].addEventListener("click", (e) => {
      console.log(e.target.value);
      body.style.backgroundColor = e.target.value;
      localStorage.setItem("backgroundColor", JSON.stringify(e.target.value));
    });
  }
};

const getBckgColor = () => {
  const color = JSON.parse(localStorage.getItem("backgroundColor"));
  body.style.backgroundColor = color;
};

function initialRenderization() {
  if (localStorage.getItem("backgroundColor") === null) {
    localStorage.setItem("backgroundColor", JSON.stringify([]));
  } else {
    setBckgroundColor();
    getBckgColor();
  }
}
initialRenderization();
