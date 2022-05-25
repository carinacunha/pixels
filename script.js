/* eslint-disable no-shadow */
/* eslint-disable no-undef */
function backgroundColor(color1, color2, color3, color4) {
  const backgroundColor = document.getElementsByClassName('color');
  backgroundColor[0].style.backgroundColor = color1;
  backgroundColor[1].style.backgroundColor = color2;
  backgroundColor[2].style.backgroundColor = color3;
  backgroundColor[3].style.backgroundColor = color4;
}

color1 = 'black';
color2 = 'rgb(149, 218, 193)';
color3 = 'rgb(255, 235, 161)';
color4 = 'rgb(253, 111, 150)';

// eslint-disable-next-line no-undef
backgroundColor(color1, color2, color3, color4);
