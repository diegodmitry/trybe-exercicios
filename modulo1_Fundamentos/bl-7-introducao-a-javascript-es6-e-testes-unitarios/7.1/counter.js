const btnUp = document.querySelector('.up');
const span = document.querySelector('span');
const btnDown = document.querySelector('.down');

let counter = 0;
btnUp.addEventListener('click', () => span.textContent = counter += 1);
btnDown.addEventListener('click', () => span.textContent = counter -= 1);