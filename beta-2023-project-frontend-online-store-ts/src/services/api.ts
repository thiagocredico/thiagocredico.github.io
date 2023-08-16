export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId: string, query: string)
  : Promise<any> {
  const categories = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const response = categories.json().then((data) => data);
  return response;
}

export async function getProductById(productId: string): Promise<any> {
  const idProduct = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  const response = await idProduct.json();
  return response;
}
