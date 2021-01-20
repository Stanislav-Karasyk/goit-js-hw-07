const inputRef = document.querySelector('#font-size-control');

const spanRef = document.querySelector('#text');

const varyFontSize = () => {
  spanRef.style.fontSize = Number(inputRef.value) + 'px';
};

inputRef.addEventListener('input', varyFontSize);
