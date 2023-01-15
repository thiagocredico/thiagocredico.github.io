const generatedList = document.getElementById('lista-tarefas');

function changetoCompletedStyle(dblclick) {
  const triger2 = dblclick;
  triger2.target.classList.toggle('completed');
}

function changeBackgroundColor(event) {
  const selectedItem = document.querySelector('.selected');
  const triger = event;
  if (selectedItem) {
    selectedItem.classList.remove('selected');
  }
  triger.target.classList.add('selected');
}

function makeList() {
  const inputtedText = document.getElementById('texto-tarefa');
  const generateList = document.createElement('li');
  generateList.innerText = inputtedText.value;
  generatedList.appendChild(generateList);
  inputtedText.value = '';
  generateList.addEventListener('click', changeBackgroundColor);
  generateList.addEventListener('dblclick', changetoCompletedStyle);
}

function listenerTodoButton() {
  const doList = document.getElementById('criar-tarefa');
  doList.addEventListener('click', makeList);
}

function cleanAll() {
  generatedList.innerText = '';
}

function listenerCleanAllButton() {
  const doList = document.getElementById('apaga-tudo');
  doList.addEventListener('click', cleanAll);
}

function cleanCompleted() {
  const completedTasks = document.querySelectorAll('#lista-tarefas>.completed');
  if (completedTasks.length > 0) {
    for (let index = 0; index < completedTasks.length; index += 1) {
      completedTasks[index].remove();
    }
  }
}

function listenerCleanCompletedButton() {
  const completedList = document.getElementById('remover-finalizados');
  completedList.addEventListener('click', cleanCompleted);
}

function saveList() {
  localStorage.setItem('storagedList', JSON.stringify(generatedList.innerHTML));
}

function listenerSaveButton() {
  const completedList = document.getElementById('salvar-tarefas');
  completedList.addEventListener('click', saveList);
}

function moveUp() {
  const selectedItem = document.querySelector('.selected');
  console.log('up', selectedItem);
  if (selectedItem && selectedItem.previousElementSibling) {
    selectedItem.parentNode.insertBefore(selectedItem, selectedItem.previousElementSibling);
  }
}

function moveDown() {
  const selectedItem = document.querySelector('.selected');
  console.log('down', selectedItem);
  if (selectedItem && selectedItem.nextElementSibling) {
    selectedItem.parentNode.insertBefore(selectedItem.nextElementSibling, selectedItem);
  }
}

function listenerUpButton() {
  const completedList = document.getElementById('mover-cima');
  completedList.addEventListener('click', moveUp);
}

function listenerDownButton() {
  const completedList = document.getElementById('mover-baixo');
  completedList.addEventListener('click', moveDown);
}

function cleanSelectedItem() {
  const selectedItem = document.querySelector('.selected');
  selectedItem.remove();
}

function listenerCleanSelectedButton() {
  const completedList = document.getElementById('remover-selecionado');
  completedList.addEventListener('click', cleanSelectedItem);
}

window.onload = () => {
  listenerTodoButton();
  listenerCleanAllButton();
  listenerCleanCompletedButton();
  listenerSaveButton();
  if (localStorage.getItem('storagedList') !== null) {
    generatedList.innerHTML = JSON.parse(localStorage.getItem('storagedList'));
  }
  listenerUpButton();
  listenerDownButton();
  listenerCleanSelectedButton();
};
