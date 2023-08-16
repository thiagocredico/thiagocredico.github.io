const getInputtedText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const redButton = document.getElementById('fire');
const blueButton = document.getElementById('water');
const greenButton = document.getElementById('earth');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

function inputTextIntoMeme() {
  memeText.innerText = getInputtedText.value;
}

getInputtedText.addEventListener('input', inputTextIntoMeme);

function newBorder(event) {
  const memeImageContainer = document.querySelector('#meme-image-container');
  const triger = event.target.className;
  memeImageContainer.classList.remove('fire');
  memeImageContainer.classList.remove('earth');
  memeImageContainer.classList.remove('water');
  memeImageContainer.classList.add(triger);
}

redButton.addEventListener('click', newBorder);
blueButton.addEventListener('click', newBorder);
greenButton.addEventListener('click', newBorder);

function newMeme(path) {
  const memeImag = document.getElementById('meme-image');
  memeImag.src = path.target.src;
}

meme1.addEventListener('click', newMeme);
meme2.addEventListener('click', newMeme);
meme3.addEventListener('click', newMeme);
meme4.addEventListener('click', newMeme);

window.onload = () => {
  inputTextIntoMeme();
};
