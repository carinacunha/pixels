// Requisito 1, 2, e 3
function background(color1, color2, color3, color4) {
  const backgroundColor = document.getElementsByClassName('color');
  backgroundColor[0].style.backgroundColor = color1;
  backgroundColor[1].style.backgroundColor = color2;
  backgroundColor[2].style.backgroundColor = color3;
  backgroundColor[3].style.backgroundColor = color4;
}

const color1 = 'black';
const color2 = 'rgb(149, 218, 193)';
const color3 = 'rgb(255, 235, 161)';
const color4 = 'rgb(253, 111, 150)';

background(color1, color2, color3, color4);

// Requisio 4 e 5
const divContainer = document.getElementById('pixel-board');
const numberLines = 5;
const numberColumns = 5;

for (let i = 1; i <= numberLines; i += 1) {
  const divLine = document.createElement('div');
  divLine.className = 'line';
  divContainer.appendChild(divLine);

  for (let j = 1; j <= numberColumns; j += 1) {
    const divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    divLine.appendChild(divPixel);
  }
}

// Requisito 6
const colorStart = document.getElementsByClassName('color')[0];
colorStart.className += ' selected';

// Requisito 7

const palette = document.getElementById('color-palette');

palette.addEventListener('click', (event) => {
  const evt = event;
  const selectedClass = document.getElementsByClassName('color selected')[0];

  selectedClass.className = 'color';
  evt.target.className += ' selected';
});

// Requisto 8
const pixels = document.getElementById('pixel-board');

pixels.addEventListener('click', (event) => {
  const evt = event;
  const selectedColor = document.getElementsByClassName('color selected')[0];

  evt.target.style.background = selectedColor.style.backgroundColor;
});

// Requisito 9
const buttonClear = document.getElementById('clear-board');
const setPixels = document.getElementsByClassName('pixel');

function clearColor() {
  // eslint-disable-next-line no-restricted-syntax
  for (const e of setPixels) {
    e.style.backgroundColor = 'white';
  }
}

buttonClear.addEventListener('click', clearColor);

// Requisito 10
const generateSquare = document.getElementById('generate-board');

function generate() {
  while (divContainer.firstChild) {
    divContainer.removeChild(divContainer.firstChild);
  }

  let number = parseInt(document.getElementById('board-size').value);

  if(document.querySelector('#board-size').value.length == 0){
    window.alert('Board inválido!'); 
  }
  if(number >= 5 && number <= 50) {
    for (let i = 1; i <= number; i += 1) {
      const divLine = document.createElement('div');
      divLine.className = 'line';
      divContainer.appendChild(divLine);
  
    for (let j = 1; j <= number; j += 1) {
      const divPixel = document.createElement('div');
      divPixel.className = 'pixel';
      divLine.appendChild(divPixel);
    }
  }
  }
};

generateSquare.addEventListener('click', generate);

// Requisito 11

// Requisito 12
// eslint-disable-next-line func-names

const backgroundRandom = document.getElementsByClassName('color');
for (let i = 1; i < backgroundRandom.length; i += 1) {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  const rgb = `rgb(${r},${g},${b})`;
  backgroundRandom[i].style.backgroundColor = rgb;
}

