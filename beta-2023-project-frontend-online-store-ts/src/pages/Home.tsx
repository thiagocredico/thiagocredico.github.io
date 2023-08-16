import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import * as storage from '../services/localStorage';
import Categories from '../components/Categories';

interface Product {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
  shipping: { free_shipping: boolean };
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [cartQuantity, setCartQuantity] = useState<number>(0);

  const getSelectedCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCategoryId(value);
  };

  const fetchProducts = useCallback(async () => {
    try {
      if (query !== '' || categoryId !== '') {
        const { results } = await api.getProductsFromCategoryAndQuery(categoryId, query);
        setProducts(results);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }, [query, categoryId]);

  useEffect(() => {
    fetchProducts();
    const storageData = JSON.parse(localStorage.getItem('cartItems') ?? '[]');
    const sum = storageData.reduce((acc:number, curr:Product) => acc + curr.quantity, 0);
    setCartQuantity(sum);
  }, [fetchProducts]);

  const handleUpdateLocalStorage = (product:Product) => {
    const { sum } = storage.updateLocalStorage(product);
    setCartQuantity(sum);
  };

  return (
    <>
      <aside>
        <Categories selectCategory={ getSelectedCategory } />
      </aside>
      <input
        type="text"
        data-testid="query-input"
        value={ query }
        onChange={ ({ target }) => setQuery(target.value) }
      />
      <button
        type="button"
        data-testid="query-button"
        onClick={ () => fetchProducts() }
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
      </button>

      <Link
        to="/shopping-cart"
        data-testid="shopping-cart-button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
        <span data-testid="shopping-cart-size">{cartQuantity}</span>
      </Link>

      <section>
        {products.length < 1 && (
          <h3 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>
        )}
        {products.map((product) => (
          <>
            <Link
              to={ `/product-details/${product.id}` }
              data-testid="product-detail-link"
              key={ `link${product.id}` }

            >
              <section
                key={ `product${product.id}` }
                data-testid="product"
              >
                <p
                  key={ `title${product.id}` }
                >
                  {product.title}
                </p>
                <img
                  key={ `img${product.id}` }
                  src={ product.thumbnail }
                  alt={ product.title }
                />
                <p
                  key={ `price${product.id}` }
                >
                  {`R$${product.price}`}
                </p>
                { product.shipping.free_shipping
                    && <p data-testid="free-shipping">Frete Gátis</p> }
              </section>
            </Link>
            <button
              key={ `button${product.id}` }
              data-testid="product-add-to-cart"
              onClick={ () => handleUpdateLocalStorage(product) }
            >
              Adicionar ao carrinho
            </button>
          </>

        ))}
      </section>
    </>
  );
}
