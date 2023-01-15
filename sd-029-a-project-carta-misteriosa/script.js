const getBody = document.querySelector('body');

function newButton() {
  const createDiv = document.createElement('div');
  createDiv.style.display = 'flex';
  getBody.appendChild(createDiv);
  const createButton = document.createElement('button');
  createButton.id = 'criar-carta';
  createButton.innerText = 'Criar carta!';
  createDiv.appendChild(createButton);
  createDiv.style.padding = '18px';
}

function groups(event) {
  const span = document.getElementsByTagName('span');
  const groupStyle = ['newspaper', 'magazine1', 'magazine2'];
  const randomStyle = groupStyle[Math.floor(Math.random() * 3)];
  const groupSize = ['medium', 'big', 'reallybig'];
  const randomSize = groupSize[Math.floor(Math.random() * 3)];
  const groupRotation = ['rotateleft', 'rotateright'];
  const randomRotation = groupRotation[Math.floor(Math.random() * 2)];
  const groupInclination = ['skewleft', 'skewright'];
  const randomInclination = groupInclination[Math.floor(Math.random() * 2)];
  span[event].classList.add(
    randomStyle,
    randomSize,
    randomRotation,
    randomInclination,
  );
}

function renewSpan() {
  const getSpan = document.querySelectorAll('span');
  for (let index = 0; index < getSpan.length; index += 1) {
    getSpan[index].addEventListener('click', () => {
      getSpan[index].className = '';
      groups(index);
    });
  }
}

function makeLetter() {
  const inputtedText = document.getElementById('carta-texto');
  const text = inputtedText.value;
  const splittedWords = text.split(' ');
  const generatedText = document.getElementById('carta-gerada');
  const countWords = document.querySelector('#carta-contador');
  generatedText.innerHTML = '';
  if (text && text.trim()) {
    for (let index = 0; index < splittedWords.length; index += 1) {
      const generateSpan = document.createElement('span');
      generateSpan.textContent = splittedWords[index];
      generatedText.appendChild(generateSpan);
      groups(index);
      renewSpan();
      countWords.textContent = splittedWords.length;
    }
  } else {
    generatedText.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
}

function listenerMakeLetter() {
  const generateLetter = document.getElementById('criar-carta');
  generateLetter.addEventListener('click', makeLetter);
}

function createClassNewsPaper() {
  const createDiv = document.createElement('div');
  createDiv.className = 'newspaper';
  getBody.appendChild(createDiv);
  createDiv.style.backgroundColor = 'rgb(250, 235, 215)';
  createDiv.style.fontFamily = 'Times New Roman';
  createDiv.style.fontWeight = '700';
}

function createClassMagazine1() {
  const createDiv = document.createElement('div');
  createDiv.className = 'magazine1';
  getBody.appendChild(createDiv);
  createDiv.style.backgroundColor = 'rgb(0, 128, 128)';
  createDiv.style.color = 'rgb(255, 255, 255)';
  createDiv.style.fontFamily = 'Verdana';
  createDiv.style.fontWeight = '900';
  createDiv.style.textTransform = 'uppercase';
}

function createClassMagazine2() {
  const createDiv = document.createElement('div');
  createDiv.className = 'magazine2';
  createDiv.style.backgroundImage = 'url(images/pink-pattern.png)';
  createDiv.style.color = 'rgb(255, 0, 255)';
  createDiv.style.fontFamily = 'Verdana';
  createDiv.style.fontWeight = '900';
  getBody.appendChild(createDiv);
}

function createClassMedium() {
  const createDiv = document.createElement('div');
  createDiv.className = 'medium';
  createDiv.style.fontSize = '20px';
  createDiv.style.padding = '8px';
  getBody.appendChild(createDiv);
}

function createClassBig() {
  const createDiv = document.createElement('div');
  createDiv.className = 'big';
  createDiv.style.fontSize = '30px';
  createDiv.style.padding = '10px';
  getBody.appendChild(createDiv);
}

function createClassReallyBig() {
  const createDiv = document.createElement('div');
  createDiv.className = 'reallybig';
  createDiv.style.fontSize = '40px';
  createDiv.style.padding = '15px';
  getBody.appendChild(createDiv);
}

function createClassRotateLeft() {
  const createDiv = document.createElement('div');
  createDiv.className = 'rotateleft';
  createDiv.style.transform = 'matrix(0.996195, -0.0871557, 0.0871557, 0.996195, 0, 0)';
  getBody.appendChild(createDiv);
}

function createClassRotateRight() {
  const createDiv = document.createElement('div');
  createDiv.className = 'rotateright';
  createDiv.style.transform = 'matrix(0.996195, 0.0871557, -0.0871557, 0.996195, 0, 0)';
  getBody.appendChild(createDiv);
}

function createClassSkewLeft() {
  const createDiv = document.createElement('div');
  createDiv.className = 'skewleft';
  createDiv.style.transform = 'matrix(1, 0, 0.176327, 1, 0, 0)';
  getBody.appendChild(createDiv);
}

function createClasSkewRight() {
  const createDiv = document.createElement('div');
  createDiv.className = 'skewright';
  createDiv.style.transform = 'matrix(1, 0, -0.176327, 1, 0, 0)';
  getBody.appendChild(createDiv);
}

window.onload = () => {
  newButton();
  listenerMakeLetter();
  createClassNewsPaper();
  createClassMagazine1();
  createClassMagazine2();
  createClassMedium();
  createClassBig();
  createClassReallyBig();
  createClassRotateLeft();
  createClassRotateRight();
  createClassSkewLeft();
  createClasSkewRight();
};
