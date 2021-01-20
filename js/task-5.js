const inputValueRef = document.querySelector('#name-input');

const insertName = () => {
  const spanNameRef = document.querySelector('#name-output');
  if (!inputValueRef.value) {
    spanNameRef.textContent = 'незнакомец';
  } else spanNameRef.textContent = inputValueRef.value;
};

inputValueRef.addEventListener('input', insertName);
