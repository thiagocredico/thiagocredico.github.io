//
const getBody = document.querySelector('body');
const rgb = document.querySelector('#rgb-color');
let points = 0;

//
function gessTheColor() {
  const r1 = Math.floor(Math.random() * 256);
  const g1 = Math.floor(Math.random() * 256);
  const b1 = Math.floor(Math.random() * 256);
  rgb.textContent = `rgb(${r1}, ${g1}, ${b1})`;
}

function generateBalls() {
  const getBalls = document.querySelector('#balls');
  for (let index = 0; index < 6; index += 1) {
    const createDiv = document.createElement('div');
    createDiv.className = 'ball';
    createDiv.style.border = 'solid 1px black';
    createDiv.style.width = '45px';
    createDiv.style.height = '45px';
    createDiv.style.borderRadius = '50% 50%';
    getBalls.appendChild(createDiv);
  }
}

function createBalls() {
  const createDiv = document.createElement('div');
  createDiv.id = 'balls';
  createDiv.style.display = 'flex';
  getBody.appendChild(createDiv);
  generateBalls();
}

function createNewColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

function colorBalls() {
  const getColor = document.querySelectorAll('.ball');
  const getRgb = document.querySelector('#rgb-color');
  console.log(getRgb.textContent);
  const correctposition = Math.floor(Math.random() * 5);
  for (let index = 0; index < getColor.length; index += 1) {
    if (index === correctposition) {
      getColor[index].style.backgroundColor = getRgb.textContent;
    } else {
      getColor[index].style.backgroundColor = createNewColor();
    }
  }
}

function createAnswer() {
  const createDiv = document.createElement('p');
  createDiv.id = 'answer';
  createDiv.style.display = 'flex';
  createDiv.innerText = 'Escolha uma cor';
  getBody.appendChild(createDiv);
}

function guessedColor(event) {
  const answer = document.querySelector('#answer');
  const score = document.querySelector('#score');
  if (event.target.style.backgroundColor === rgb.textContent) {
    answer.textContent = 'Acertou!';
    points += 3;
    score.textContent = points;
    localStorage.setItem('score', points);
  } else {
    answer.textContent = 'Errou! Tente novamente!';
  }
}

function colorClick() {
  const balls = document.getElementsByClassName('ball');
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].addEventListener('click', guessedColor);
  }
}

function createResetGameButton() {
  const createDiv = document.createElement('div');
  createDiv.style.display = 'flex';
  getBody.appendChild(createDiv);
  const createButton = document.createElement('button');
  createButton.id = 'reset-game';
  createButton.innerText = 'Reset game!';
  createDiv.appendChild(createButton);
  createDiv.style.padding = '18px';
}

function reset() {
  gessTheColor();
  colorBalls();
  const answer = document.querySelector('#answer');
  answer.textContent = 'Escolha uma cor';
}

function resetGameListener() {
  const resetGame = document.querySelector('#reset-game');
  resetGame.addEventListener('click', reset);
}

function createScore() {
  const createDiv = document.createElement('p');
  createDiv.id = 'score';
  createDiv.style.display = 'flex';
  createDiv.innerText = '0';
  getBody.appendChild(createDiv);
}

window.onload = () => {
  gessTheColor();
  createBalls();
  colorBalls();
  createAnswer();
  colorClick();
  createResetGameButton();
  resetGameListener();
  createScore();
};
