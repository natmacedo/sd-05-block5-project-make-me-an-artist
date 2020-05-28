//Create pixel board
let pixelBoard = document.getElementById("pixel-board");
let tagTR = document.getElementsByTagName("tr");
let numberTagTR;
const genBoardButton = document.getElementById("generate-board");
const numberOfPixels = document.getElementById("board-size");

function boardInit(pixelNumbers) {
  for (let i = 0; i < pixelNumbers; i += 1) {
    let pixelLine = document.createElement("tr");
    pixelBoard.appendChild(pixelLine);
  }
  for (let i = 0; i < pixelNumbers; i += 1) {
    for (let j = 0; j < tagTR.length; j += 1) {
      let pixelColumn = document.createElement("td");
      numberTagTR = tagTR[j];
      numberTagTR.appendChild(pixelColumn);
      pixelColumn.className = "pixel white";
      pixelColumn.addEventListener("click", paintPixel);
    }}
  }
  boardInit(5);


function createBoardSize() {
  if (numberOfPixels.value >= 5 && numberOfPixels.value <= 50) {
    pixelBoard.innerText = "";
    for (let i = 0; i < numberOfPixels.value; i += 1) {
      let pixelLine = document.createElement("tr");
      pixelBoard.appendChild(pixelLine);
    }
    for (let i = 0; i < numberOfPixels.value; i += 1) {
      for (let j = 0; j < tagTR.length; j += 1) {
        let pixelColumn = document.createElement("td");
        numberTagTR = tagTR[j];
        numberTagTR.appendChild(pixelColumn);
        pixelColumn.className = "pixel white";
        pixelColumn.addEventListener("click", paintPixel);
      }
    }
  }
  if(numberOfPixels.value === "") {
    alert("Board inválido!");
  }
}

genBoardButton.addEventListener("click", createBoardSize);

//Change class "selected"
let colorBlack = document.getElementById("cor1");
let colorGreen = document.getElementById("cor2");
let colorYellow = document.getElementById("cor3");
let colorRed = document.getElementById("cor4");
let colorSelected = document.getElementsByClassName("selected")[0];
let colorPalette = document.getElementById("color-palette");

function changeSelected() {
  if (event.target === colorBlack) {
    colorSelected.classList.remove("selected");
    colorBlack.classList.add("selected");
    colorSelected = event.target;
  } else if (event.target === colorGreen) {
    colorSelected.classList.remove("selected");
    colorGreen.classList.add("selected");
    colorSelected = event.target;
  } else if (event.target === colorYellow) {
    colorSelected.classList.remove("selected");
    colorYellow.classList.add("selected");
    colorSelected = event.target;
  } else if (event.target === colorRed) {
    colorSelected.classList.remove("selected");
    colorRed.classList.add("selected");
    colorSelected = event.target;
  }
}

colorPalette.addEventListener("click", changeSelected);

//Paint pixels
function paintPixel() {
  let colorClass = colorSelected.classList[1];
  event.target.classList.remove(event.target.classList[1]);
  event.target.classList.add(colorClass);
}

//Clear Board
function clearBoard() {
  let allPixels = document.querySelectorAll("#pixel-board > tr > td");
  for (let i = 0; i < allPixels.length; i += 1) {
    allPixels[i].classList.remove(allPixels[i].classList[1]);
    allPixels[i].classList.add((allPixels[i].classList[1] = "white"));
  }
}

let clearButton = document.getElementById("clear-board");
clearButton.addEventListener("click", clearBoard);
