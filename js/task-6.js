function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElement = document.querySelector('input');
const boxes = document.querySelector('#boxes');
const create = document.querySelector('#data-create');
const destroy = document.querySelector('#data-destroy');

function createBoxes(amount){
  if (1 <= amount &&  amount<=100){
    let size = 30;
    let divs = [];
    for (let i = 0; i < amount; i++){
      const div = document.createElement('div');
      div.style.background = getRandomHexColor();
      div.style.height = size + 'px';
      div.style.width = size + 'px';

      size += 10;
      divs.push(div)
    }
    boxes.append(...divs);
  }
}

create.addEventListener('click', () => {
  let data = Number(inputElement.value);
  createBoxes(data)
})

destroy.addEventListener('click', () => {
  const allDivs = boxes.querySelectorAll('div');
 allDivs.forEach(div => {div.remove();});
})