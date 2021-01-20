const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulRef = document.querySelector('#ingredients');

ingredients.forEach(element => {
  const liRef = document.createElement('li');
  ulRef.append(liRef);
  liRef.textContent = element;
});
