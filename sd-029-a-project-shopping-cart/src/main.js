import './style.css';
import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement,
  createCartProductElement, calcCartPrice } from './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const getProductsSection = document.querySelector('.products');
const loadingP = document.createElement('p');
const errorP = document.createElement('p');

const functionInsertLoading = () => {
  loadingP.className = 'loading';
  loadingP.innerHTML = 'carregando...';
  getProductsSection.appendChild(loadingP);
};

try {
  functionInsertLoading();

  const fetchedProductsList = await fetchProductsList('computador');

  fetchedProductsList.forEach((element) => {
    getProductsSection.appendChild(createProductElement(element));
  });

  const functionRemoveLoading = () => {
    getProductsSection.removeChild(loadingP);
  };

  functionRemoveLoading();
} catch (error) {
  const functionInsertError = () => {
    errorP.className = 'error';
    errorP.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
    getProductsSection.appendChild(errorP);
  };
  functionInsertError();
}

// comentando pq deu trabalho
window.onload = () => {
  const storagedCart = getSavedCartIDs()
    .map(async (element) => fetchProduct(element));// O proprio lint sugeriu remover o await
  const ordenatedCart = async () => {
    const promised = await Promise.all(storagedCart);// aguardando todas as promisses
    promised
      .forEach((element) => {
        document
          .querySelector('.cart__products')// capturando o elemento HTML do carrinho
          .appendChild(createCartProductElement(element));// inserindo o produto no HTML do carrinho
      });//
    calcCartPrice();
  };//
  ordenatedCart();// Chamando a função no window.onload
};
