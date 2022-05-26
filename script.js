// Requisito 1, 2, e 3
function backgroundColor(color1, color2, color3, color4) {
  let backgroundColor = document.getElementsByClassName('color');
  backgroundColor[0].style.backgroundColor = color1;
  backgroundColor[1].style.backgroundColor = color2;
  backgroundColor[2].style.backgroundColor = color3;
  backgroundColor[3].style.backgroundColor = color4;
}

let color1 = 'black';
let color2 = 'rgb(149, 218, 193)';
let color3 = 'rgb(255, 235, 161)';
let color4 = 'rgb(253, 111, 150)';

backgroundColor(color1, color2, color3, color4);

// Requisio 4 e 5
let divContainer = document.getElementById('pixel-board');
let numberLines = 5;
let numberColumns = 5;

for (i = 1; i <= numberLines; i += 1) {

  let divLine = document.createElement('div');
  divLine.className = 'line';
  divContainer.appendChild(divLine);

  for (j = 1; j <= numberColumns; j += 1) {
    let divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    divLine.appendChild(divPixel);
  }
}

// Requisito 6

let colorStart = document.getElementsByClassName('color')[0];
colorStart.className += ' selected';

// Requisito 7

let palette = document.getElementById('color-palette');

palette.addEventListener('click', function(event) {
  let selectedClass = document.getElementsByClassName('color selected')[0];
  selectedClass.className = 'color';
  event.target.className += ' selected';
});

// //Requisto 8

// let palette = document.getElementById('color-palette');

// palette.addEventListener('click', function(event){
//   event.target.style.background = document.getElementsByClassName('color selected').backgroundColor;
// })

// Requisito 9

// let buttonClear = document.getElementById('clear-board');
// let pixels = document.getElementById('pixel-board');

// function clearColor() {
//   pixels.style.backgroundColor = 'white';
// }

// buttonClear.addEventListener('click', clearColor);

// clearColor();