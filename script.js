// code by Lyraah
// Variáveis
let colorBase1 = document.querySelectorAll(".color")[0];
let colorBase2 = document.querySelectorAll(".color")[1];
let colorBase3 = document.querySelectorAll(".color")[2];
let colorBase4 = document.querySelectorAll('.color')[3];
let listaDePixels = document.querySelectorAll('.pixel');
let clearButton = document.querySelector('button');
let palette = document.querySelector('#color-palette');
let pixelBoard = document.querySelector('#pixel-board');
let corSelecionada = document.querySelector('#selected');
let color1 = false, color2 = false, color3 = false, color4 = false;

// definições prederminadas
colorBase1.style.background = 'black';
colorBase2.style.background = 'green';
colorBase3.style.background = 'red';
colorBase4.style.background = 'pink';
colorBase1.className = 'color selected';
colorBase2.className = 'color';
colorBase3.className = 'color';
colorBase4.className = 'color';

// funções
function clear() {
  for (let i = 0; i < listaDePixels.length; i += 1){
    listaDePixels[i].style.backgroundColor = 'white';
  }
}

function colorSelect(n) {
  if (n.target === colorBase1) {
    color1 = true;
    return(color1);
  } else if (n.target === colorBase2) {
    color2 = true;
    return(color2);
  } else if (n.target === colorBase3) {
    color3 = true;
    return(color3);
  } else if (n.target === colorBase4) {
    color4 = true;
    return(color4);
  }
  corSelect2()
}
function corSelect2() {
  if (color1 === true) {
    colorBase1.className = 'color selected';
  } else if (color2 === true) {
    colorBase2.className = 'color selected';
  } else if (color3 === true) {
    colorBase3.className = "color selected";
  } else if (color4 === true) {
    colorBase4.className = "color selected";
  }
};

function colorir(n) {
  if (colorBase1.className === 'color selected') {
    n.target.style.backgroundColor = 'black';
  } else if (colorBase2.className === 'color selected') {
    n.target.style.backgroundColor = 'green';
  } else if (colorBase3.className === 'color selected') {
    n.target.style.background = 'red';
  } else {
    n.target.style.background = 'pink';
  }
}

// eventos
clearButton.addEventListener('click', clear);
palette.addEventListener('click', colorSelect);
pixelBoard.addEventListener('click', colorir);

// chamadas de funções
clear()
