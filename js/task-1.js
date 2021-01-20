const list = document.querySelector('#categories');

const items = list.querySelectorAll('.item');

console.log(`В списке ${items.length} категории.`);

items.forEach(element => {
  const h2Ref = element.querySelector('h2');

  const liRef = element.querySelectorAll('li');

  console.log(`Категория: ${h2Ref.textContent} 
Количество элементов: ${liRef.length}`);
});
