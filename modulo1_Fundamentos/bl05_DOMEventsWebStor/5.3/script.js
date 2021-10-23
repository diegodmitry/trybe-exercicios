function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

// 1.
const makeLi = (array) => {
  const ulDays = document.querySelector("#days");
  for (let i = 0; i < array.length; i++) {
    // creating li
    const liDays = document.createElement("li");

    // add id
    liDays.id = "days";

    // add class
    liDays.classList.add("day");

    // adding element of array
    liDays.innerText = array[i];

    // add class holiday
    if (
      liDays.textContent === "24" ||
      liDays.textContent === "25" ||
      liDays.textContent === "31"
    )
      liDays.classList.add("holiday");

    // add class friday
    if (
      liDays.textContent === "4" ||
      liDays.textContent === "11" ||
      liDays.textContent === "18" ||
      liDays.textContent === "25"
    )
      liDays.classList.add("friday");

    // putting li inside of ul
    ulDays.appendChild(liDays);
  }
};
makeLi(dezDaysList);

// 2.
// create button
const btnHoliday = document.createElement("button");
const holiday = (feriados) => {
  // add id
  btnHoliday.id = "btn-holiday";

  // add value
  btnHoliday.textContent = feriados;

  // add btnHoliday to DOM
  document.querySelector(".buttons-container").appendChild(btnHoliday);

  // add click event
  // 3.
  btnHoliday.addEventListener("click", function (e) {
    const holidays = document.querySelectorAll(".holiday");
    for (let i = 0; i < holidays.length; i++) {
      if (holidays[i].style.backgroundColor === "")
        holidays[i].style.backgroundColor = rgb(172, 224, 171);
      else {
        holidays[i].style.backgroundColor = "";
      }
    }
  });
};
holiday("feriados");

function rgb(r, g, b) {
  // console.log(r, g, b);
  return "rgb(" + r + "," + g + "," + b + ")";
}

// 4.
// create button
const btnFriday = document.createElement("button");
const friday = (string) => {
  // button name
  btnFriday.textContent = string;

  // button id
  btnFriday.id = "btn-friday";

  // add btnFriday to DOM
  document.querySelector(".buttons-container").appendChild(btnFriday);
};
friday("Sexta-feira");

// 5.
const fnFriday = (e) => {
  // console.log(e);
  const fridays = document.querySelectorAll(".friday");
  // console.log(fridays);
  for (let i = 0; i < fridays.length; i++) {
    console.log(fridays[i].style.color === "");
    if (fridays[i].style.color === "") {
      fridays[i].style.color = "black";
    } else {
      fridays[i].style.color = "";
    }
  }
};
btnFriday.addEventListener("click", fnFriday);

// 6.
const mouseOver = () => {
  const days = document.getElementById("days");

  days.addEventListener("mouseover", function (e) {
    e.target.style.fontSize = "x-large";
  });
};
mouseOver();
const mouseOut = () => {
  const days = document.getElementById("days");
  days.addEventListener("mouseout", function (e) {
    e.target.style.fontSize = "medium";
  });
};
mouseOut();

// 7.
const calTask = (string) => {
  const span = document.createElement("span");
  span.textContent = string;
  document.querySelector(".my-tasks").appendChild(span);
};
calTask("cozinhar");

// 8.
const color = (string) => {
  const div = document.createElement("div");
  div.classList = "task";
  div.style.backgroundColor = string;
  document.querySelector(".my-tasks").appendChild(div);
};
color("green");

// 9.
const taskDiv = () => {
  const task = document.querySelector(".task");
  task.addEventListener("click", function (e) {
    // console.log(e.target.classList);
    if (!e.target.classList.contains("selected")) {
      e.target.classList = "task selected";
    } else {
      e.target.className = "task";
    }
  });
};
taskDiv();

// 10.
const taskCalendar = () => {
  const days = document.querySelectorAll(".day");
  const task = document.querySelector(".task");

  // loop over days and add click event
  for (let i = 0; i < days.length; i++) {
    days[i].addEventListener("click", function (e) {
      if (task.classList.contains("selected"))
        e.target.style.color = task.style.backgroundColor;
      else console.log("tarefa não está selecionada");
    });
  }
};
taskCalendar();

// BONUS
const bonus = () => {
  const input = document.getElementById('task-input');
  console.log(input);
  const btnAdd = document.querySelector('#btn-add');
  console.log(btnAdd);
  btnAdd.addEventListener('click', function(e) {
    e.preventDefault();

    if(input.value.length > 0) {
      calTask(input.value)
    } else {
      alert('Preencha o INPUT!')
    }
    input.value = '';
  })

};
bonus();
