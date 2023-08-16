export const fetchProduct = async (ProductID) => {
  // seu código aqui
  const endpoint = `https://api.mercadolibre.com/items/${ProductID}`;
  if (!ProductID) {
    throw new Error('ID não informado');
  }
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

export const fetchProductsList = async (QUERY) => {
  // seu código aqui
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;
  if (!QUERY) {
    throw new Error('Termo de busca não informado');
  }
  const response = await fetch(endpoint);
  const data = await response.json();
  return data.results;
};
