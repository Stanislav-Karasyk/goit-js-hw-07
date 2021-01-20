const btnIncrementRef = document.querySelector('[data-action=increment]');
const btnDecrementRef = document.querySelector('[data-action=decrement]');

let result = document.querySelector('#value');

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  result.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  result.textContent = counterValue;
};

btnIncrementRef.addEventListener('click', increment);
btnDecrementRef.addEventListener('click', decrement);
