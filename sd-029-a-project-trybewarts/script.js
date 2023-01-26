const checkEmail = document.getElementById('check-email');
const inputSenha = document.getElementById('check-senha');
const buttonLogin = document.getElementById('button-login');
const checkbox = document.getElementById('agreement');
const buttonEnviar = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');
const paragrafo = document.getElementById('counter');
const formEvaluation = document.getElementById('evaluation-form');
const formData = document.getElementById('form-data');
const inputName = document.getElementById('input-name');
const inputlastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const inputHouse = document.getElementById('house');
const inputContent = document.getElementsByClassName('subject');
const inputRate = document.getElementsByName('rate');
const family = document.getElementsByName('family');

const familyFunction = () => {
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked) {
      return family[index].value;
    }
  }
};

const materiaFunction = () => {
  let materias = '';
  const virgula = ', ';
  for (let index = 0; index < inputContent.length; index += 1) {
    if (inputContent[index].checked) {
      console.log(inputContent[index]);
      materias += inputContent[index].value + virgula;
    }
  }
  return materias;
};

const rateFunction = () => {
  for (let index = 0; index < inputRate.length; index += 1) {
    if (inputRate[index].checked) {
      return inputRate[index].value;
    }
  }
};

buttonEnviar.setAttribute('disabled', true);

buttonLogin.addEventListener('click', () => {
  if (checkEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

checkbox.addEventListener('click', () => {
  const checkedValidation = checkbox.checked;
  if (checkedValidation === false) {
    buttonEnviar.setAttribute('disabled', true);
  } else {
    buttonEnviar.removeAttribute('disabled');
  }
});

textarea.addEventListener('input', () => {
  paragrafo.innerText = 500 - textarea.value.length;
});

buttonEnviar.addEventListener('click', (event) => {
  event.preventDefault();
  formEvaluation.style.display = 'none';
  formData.style.display = 'flex';
  formData.style.flexDirection = 'column';
  formData.innerHTML = `<p> Nome: ${inputName.value} ${inputlastName.value}</p>
  <p>Email: ${inputEmail.value}</p>
  <p>Casa: ${inputHouse.value}</p>
  <p>Família: ${familyFunction()}</p>
  <p>Matérias: ${materiaFunction()}</p>
  <p>Avaliação: ${rateFunction()}</p>
  <p>Observações: ${textarea.value}</p>`;
});
// commit final
