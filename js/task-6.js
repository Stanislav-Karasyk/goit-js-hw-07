const inputRef = document.querySelector('#validation-input');
const dataSetLength = inputRef.getAttribute('data-length');

const checkSymbol = event => {
  let inputValue = event.target.value;
  if (inputValue.length === Number(dataSetLength)) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  }
  if (inputValue.length !== Number(dataSetLength)) {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
};

inputRef.addEventListener('blur', checkSymbol);
