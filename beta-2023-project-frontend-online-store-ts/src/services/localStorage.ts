interface Product {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

export const updateLocalStorage = (product: Product) => {
  let storageData = JSON.parse(localStorage.getItem('cartItems') ?? '[]');
  const productIsOnCart = storageData.find((item: Product) => item.id === product.id);

  if (productIsOnCart) {
    // console.log(productIsOnCart.available_quantity);
    if (productIsOnCart.available_quantity > productIsOnCart.quantity) {
      productIsOnCart.quantity += 1;
    }
  } else {
    storageData = [...storageData, { ...product, quantity: 1 }];
  }
  localStorage.setItem('cartItems', JSON.stringify(storageData));

  const sum = storageData.reduce((acc:number, curr:Product) => acc + curr.quantity, 0);
  localStorage.setItem('cartQuantity', JSON.stringify(sum));

  return { sum, storageData };
};

export const removeProductFromStorage = (product: Product) => {
  let storageData = JSON.parse(localStorage.getItem('cartItems') ?? '[]');
  storageData = storageData.filter((item: Product) => item.id !== product.id);
  localStorage.setItem('cartItems', JSON.stringify(storageData));

  const sum = storageData.reduce((acc:number, curr:Product) => acc + curr.quantity, 0);
  localStorage.setItem('cartQuantity', JSON.stringify(sum));

  return { sum, storageData };
};

export const getReviewsByProductId = (id: string) => {
  // Retrieve reviews from localStorage using the product ID as the key
  const reviewsData = localStorage.getItem(`${id}`);
  const reviews = reviewsData ? JSON.parse(reviewsData) : [];
  return reviews;
};
