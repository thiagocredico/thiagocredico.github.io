const cartAdress = document.querySelector('.cart__address');
const cepInput = document.querySelector('.cep-input');
const ENDPOINT1 = 'https://cep.awesomeapi.com.br/json/';
const ENDPOINT2 = 'https://brasilapi.com.br/api/cep/v2/';

export const getAddress = async (CEP) => {
  if (!CEP) {
    throw new Error('CEP não encontrado');
  }
  const api1 = await (await fetch(`${ENDPOINT1}${CEP}`)).json();
  const api2 = await (await fetch(`${ENDPOINT2}${CEP}`)).json();
  return Promise.any([api1, api2]);
};

export const searchCep = async () => {
  try {
    const dataAdd = await getAddress(cepInput.value.toString());
    const { address, street, district, neighborhood, state, city } = dataAdd;
    cartAdress.innerHTML = `${address || street
    } - ${district || neighborhood} - ${city} - ${state}`;
  } catch (error) {
    cartAdress.innerHTML = 'CEP não encontrado';
    return error;
  }
};
