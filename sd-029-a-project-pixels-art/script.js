//
const getBody = document.querySelector('.wrapper');
const allPixels = document.getElementsByClassName('pixel');
const pixelBoard = localStorage.getItem('pixelBoard');
let pixelLocal = [];
if (pixelBoard) {
  pixelLocal = JSON.parse(pixelBoard);
}
let newBoardSize;
if (localStorage.getItem('boardSize') !== null) {
  newBoardSize = localStorage.getItem('boardSize');
} else {
  newBoardSize = 5;
}

//
function generatePalette() {
  const getColorPalette = document.querySelector('#color-palette');
  for (let index = 0; index < 4; index += 1) {
    const createDiv = document.createElement('div');
    createDiv.className = 'color';
    createDiv.style.border = 'solid 1px black';
    createDiv.style.width = '45px';
    createDiv.style.height = '45px';
    createDiv.style.borderRadius = '50% 50% 9%';
    if (index === 0) {
      createDiv.classList.add('selected');
    }
    getColorPalette.appendChild(createDiv);
  }
}

function createColorPalette() {
  const createDiv = document.createElement('div');
  createDiv.id = 'color-palette';
  createDiv.style.display = 'flex';
  getBody.appendChild(createDiv);
  generatePalette();
}

function createNewColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

function putColorOnLocalStorage() {
  const getColors = document.querySelectorAll('.color');
  const saveColors = [];
  for (let index = 0; index < getColors.length; index += 1) {
    saveColors.push(getColors[index].style.backgroundColor);
  }
  localStorage.setItem('colorPalette', JSON.stringify(saveColors));
}

function colorPalette() {
  const getColor = document.querySelectorAll('.color');
  for (let index = 0; index < getColor.length; index += 1) {
    if (index === 0) {
      getColor[index].style.backgroundColor = 'black';
    } else {
      getColor[index].style.backgroundColor = createNewColor();
    }
  }
  putColorOnLocalStorage();
}

function colorStoragedPalette() {
  const getColor = document.querySelectorAll('.color');
  const getLocalStorage = JSON.parse(localStorage.getItem('colorPalette'));
  for (let index = 0; index < getColor.length; index += 1) {
    getColor[index].style.backgroundColor = getLocalStorage[index];
  }
}

function newButton() {
  const createDiv = document.createElement('div');
  createDiv.style.display = 'flex';
  getBody.appendChild(createDiv);
  const createButton = document.createElement('button');
  createButton.id = 'button-random-color';
  createButton.innerText = 'Cores aleatórias';
  createDiv.appendChild(createButton);
  createDiv.style.padding = '10px';
}

function renewColor() {
  const getButton = document.getElementById('button-random-color');
  getButton.addEventListener('click', colorPalette);
}

function createDivNewBoardInput() {
  const createDiv = document.createElement('div');
  createDiv.style.display = 'flex';
  getBody.appendChild(createDiv);
  // createDiv.style.padding = '18px';
  createDiv.id = 'newBoardInput';
}

function createVqvInput() {
  const createDiv = document.getElementById('newBoardInput');
  createDiv.style.display = 'flex';
  getBody.appendChild(createDiv);
  const createInput = document.createElement('input');
  createInput.id = 'board-size';
  createInput.type = 'number';
  createInput.min = '1';
  createInput.placeholder = 'Digite um número de 5 à 50';
  createDiv.appendChild(createInput);
  // createDiv.style.padding = '18px';
}

function createVqvButton() {
  const createDiv = document.getElementById('newBoardInput');
  createDiv.style.display = 'flex';
  getBody.appendChild(createDiv);
  const createButton = document.createElement('button');
  createButton.id = 'generate-board';
  createButton.className = 'generate-board';
  createButton.innerText = 'VQV';
  createDiv.appendChild(createButton);
  // createDiv.style.padding = '18px';
}

function savePaintedBoard() {
  const saveDrawArray = [];
  for (let index = 0; index < allPixels.length; index += 1) {
    saveDrawArray.push(allPixels[index].style.backgroundColor);
    localStorage.setItem('pixelBoard', JSON.stringify(saveDrawArray));
  }
}

function paintBoard(event) {
  const palleteColor = document.querySelectorAll('.color');
  for (let index = 0; index < palleteColor.length; index += 1) {
    if (palleteColor[index].classList.contains('selected')) {
      event.target.style.backgroundColor = palleteColor[index].style.backgroundColor;
      savePaintedBoard();
    }
  }
}

function eventListenerBoard() {
  const board = document.querySelector('#pixel-board');
  board.addEventListener('click', paintBoard);
}

function clearPixels() {
  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', () => {
    for (let index = 0; index < allPixels.length; index += 1) {
      allPixels[index].style.backgroundColor = 'white';
      savePaintedBoard();
    }
  });
}

function generateCells() {
  const matrix = document.querySelector('#pixel-board');
  for (let index = 0; index < newBoardSize; index += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    line.style.display = 'flex';
    for (let index1 = 0; index1 < newBoardSize; index1 += 1) {
      const pixelNumber = index1 + newBoardSize * index;
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      if (pixelLocal[pixelNumber]) {
        pixel.style.backgroundColor = pixelLocal[pixelNumber];
      } else {
        pixel.style.backgroundColor = 'white';
      }
      line.appendChild(pixel);
    }
    matrix.appendChild(line);
  }
}

function createMatrix() {
  const createDiv = document.createElement('div');
  createDiv.id = 'pixel-board';
  getBody.appendChild(createDiv);
  generateCells();
}

function selectElementColor(event) {
  const color = document.getElementsByClassName('color');
  for (let index = 0; index < color.length; index += 1) {
    if (color[index].classList.contains('selected')) {
      color[index].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}

function eventListenerPalette() {
  const paletteColor = document.querySelectorAll('.color');
  for (let index = 0; index < paletteColor.length; index += 1) {
    paletteColor[index].addEventListener('click', selectElementColor);
  }
}

function getUserBoardSize() {
  const userBoardSize = document.getElementById('board-size');
  newBoardSize = userBoardSize.value;
  if (userBoardSize.value === '') {
    alert('Board inválido!');
  }
  if (userBoardSize.value < 5) {
    newBoardSize = 5;
  } if (userBoardSize.value > 50) {
    newBoardSize = 50;
  }
  localStorage.removeItem('pixelBoard');
  document.getElementById('pixel-board').remove();
  clearPixels();
  createMatrix();
  eventListenerPalette();
  eventListenerBoard();
  localStorage.setItem('boardSize', newBoardSize);
  window.location.reload();
}

function resizeBoard() {
  const buttonVqv = document.getElementById('generate-board');
  buttonVqv.addEventListener('click', getUserBoardSize);
}

function cleanButton() {
  const createDiv = document.createElement('div');
  createDiv.style.display = 'flex';
  getBody.appendChild(createDiv);
  const createButton = document.createElement('button');
  createButton.id = 'clear-board';
  createButton.innerText = 'Limpar';
  createDiv.appendChild(createButton);
  createDiv.style.padding = '10px';
}

//
window.onload = () => {
  createColorPalette();
  newButton();
  renewColor();
  createDivNewBoardInput();
  createVqvInput();
  createVqvButton();
  cleanButton();
  createMatrix();
  eventListenerPalette();
  clearPixels();
  eventListenerBoard();
  resizeBoard();
  if (localStorage.getItem('colorPalette') === null) {
    colorPalette();
  } else {
    colorStoragedPalette();
  }
};
