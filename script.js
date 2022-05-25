/* eslint-disable no-shadow */
/* eslint-disable no-undef */
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

// eslint-disable-next-line no-undef
backgroundColor(color1, color2, color3, color4);


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







