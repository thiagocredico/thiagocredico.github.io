import './style.css';
import Swal from 'sweetalert2';

const input = document.querySelector('input');
const button = document.querySelector('button');
const ENDPOINT = 'https://api.exchangerate.host/latest?base=';

const validCurrency = (data) => {
  const alertText = input
    .value === '' ? 'Você precisa passar uma moeda' : 'Moeda não existe';

  if (data.base !== input.value) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: alertText,
      background: '#19191B',
      color: '#FFFFFF',
    });
    return false;
  }
  return true;
};

const createItem = (key, values, container) => {
  const element = document.createElement('div');
  const text = document.createElement('p');
  const img = document.createElement('img');
  const span = document.createElement('span');

  img.src = 'https://icon-library.com/images/coin-stack-icon/coin-stack-icon-8.jpg';

  const three = 3;

  span.innerText = values[key].toFixed(three);
  text.innerText = key;

  text.appendChild(span);
  element.classList.add('value');

  element.appendChild(img);
  element.appendChild(text);

  container.appendChild(element);
};

const createTable = (data) => {
  const values = data.rates;
  const title = document.createElement('h2');
  const container = document.querySelector('.container');

  // reset
  container.innerHTML = '';
  container.appendChild(title);
  title.innerText = `Valores referentes a 1 ${input.value}`;

  Object.keys(values).forEach((key) => {
    createItem(key, values, container);
  });
};

const renderValues = (data) => validCurrency(data) && createTable(data);

const getCurrency = () => {
  const currency = input.value.toUpperCase();
  fetch(`${ENDPOINT}${currency}`)
    .then((response) => response.json())
    .then((data) => renderValues(data));
};

button.addEventListener('click', getCurrency);
