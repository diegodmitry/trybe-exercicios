function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// 1.
const makeLi = (array) => {
  const ulDays = document.querySelector('#days');
  for (let i = 0; i < array.length; i++) {
    // creating li
    const liDays = document.createElement('li');
  
    // add id
    liDays.id = 'days';

    // add class
    liDays.classList.add('day');
    
    // adding element of array
    liDays.innerText = array[i];
    
    // add class holiday
    console.log(liDays.textContent);
    if(liDays.textContent === '24' || liDays.textContent === '25' || liDays.textContent === '31') liDays.classList.add('holiday');

    // add class friday
    if(liDays.textContent === '4' || liDays.textContent === '11' || liDays.textContent === '18' || liDays.textContent === '25') liDays.classList.add('friday');

    // putting li inside of ul
    ulDays.appendChild(liDays);
  }
};
makeLi(dezDaysList)
