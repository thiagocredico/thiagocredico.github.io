import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as storage from '../services/localStorage';

interface Product {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

export default function ShoppingCart() {
  const [productsOnCart, setProductsOnCart] = useState<Product[]>([]);
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    getCartItensFromStorage();
  }, []);

  const getCartItensFromStorage = () => {
    const storageData = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const storageQuantity = JSON.parse(localStorage.getItem('cartQuantity') ?? '0');
    setProductsOnCart(storageData);
    setCartQuantity(storageQuantity);
  };

  const handleUpdateLocalStorage = (product:Product) => {
    const { sum, storageData } = storage.updateLocalStorage(product);
    setCartQuantity(sum);
    setProductsOnCart(storageData);
  };

  const handleRemoveItem = (product: Product) => {
    const { sum, storageData } = storage.removeProductFromStorage(product);
    setCartQuantity(sum);
    setProductsOnCart(storageData);
  };

  const handleDecreaseQuantity = (product:Product) => {
    const storageData = JSON.parse(localStorage.getItem('cartItems') ?? '[]');
    const currProduct = storageData.find((item: Product) => item.id === product.id);
    if (currProduct.quantity > 1) {
      currProduct.quantity -= 1;
    } else {
      handleRemoveItem(product);
    }
    localStorage.setItem('cartItems', JSON.stringify(storageData));

    const sum = storageData.reduce((acc:number, curr:Product) => acc + curr.quantity, 0);
    localStorage.setItem('cartQuantity', JSON.stringify(sum));

    setCartQuantity(sum);
    setProductsOnCart(storageData);
  };

  return (
    <>
      <Link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22l0 72 288 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-288 0 0 72c0 9.6-5.7 18.2-14.5 22z" /></svg>
      </Link>
      <br />
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
      <span data-testid="shopping-cart-size">{cartQuantity}</span>
      { productsOnCart.length < 1
      && (
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M58.9 42.1c3-6.1 9.6-9.6 16.3-8.7L320 64 564.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L439.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L320 64 236.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L37.1 170.6c-19.3-5.5-28.8-27.2-19.8-45.1L58.9 42.1zM321.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L576 211.6v167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C79 419.7 64 400.5 64 378.5v-167L191.6 248c27.8 8 57.6-3.8 72.5-28.6L318.9 128h2.2z" /></svg>
          <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio.</h3>
        </div>
      )}
      <section>
        {productsOnCart.map((product) => (
          <section
            key={ product.id }
            data-testid="product"
          >
            <img src={ product.thumbnail } alt={ product.title } />
            <h3>{`R$${product.price}`}</h3>
            <h2
              data-testid="shopping-cart-product-name"
            >
              {product.title}
            </h2>
            <Link
              to={ `/product-details/${product.id}` }
              data-testid="product-detail-link"
            >
              Detalhes
            </Link>
            <div>
              <button
                data-testid="product-increase-quantity"
                onClick={ () => handleUpdateLocalStorage(product) }
              >
                +
              </button>
              <p data-testid="shopping-cart-product-quantity">{product.quantity}</p>
              <button
                data-testid="product-decrease-quantity"
                onClick={ () => handleDecreaseQuantity(product) }
              >
                -
              </button>
              <button
                data-testid="remove-product"
                onClick={ () => handleRemoveItem(product) }
              >
                Excluir
              </button>
            </div>
          </section>
        ))}
      </section>
      <button
        onClick={ () => navigate('/checkout') }
        disabled={ cartQuantity === 0 }
        data-testid="checkout-products"
      >
        Finalizar Compra
      </button>
    </>
  );
}
