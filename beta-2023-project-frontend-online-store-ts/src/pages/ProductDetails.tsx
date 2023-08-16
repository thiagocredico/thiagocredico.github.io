import React, { useCallback, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../services/api'; // import the API function for retrieving reviews
import * as storage from '../services/localStorage';

interface Product {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
  shipping: { free_shipping: boolean };
}

interface Review {
  email: string;
  text: string;
  rating: string;
}

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const fetchGetProductById = useCallback(async (): Promise<void> => {
    try {
      const result = await getProductById(id ?? '');
      setProduct(result);
    } catch (error: any) {
      console.error(error.message);
    }
  }, [id]);

  const fetchGetReviewsByProductId = useCallback(async (): Promise<void> => {
    try {
      const result = await storage.getReviewsByProductId(id ?? '');
      setReviews(result);
    } catch (error: any) {
      console.error(error.message);
    }
  }, [id]);

  useEffect(() => {
    fetchGetProductById();
    fetchGetReviewsByProductId();
    const storageData = JSON.parse(localStorage.getItem('cartItems') ?? '[]');
    const sum = storageData
      .reduce((acc: number, curr: Product) => acc + curr.quantity, 0);
    setCartQuantity(sum);
  }, [fetchGetProductById, fetchGetReviewsByProductId]);

  const handleUpdateLocalStorage = (item: Product) => {
    const { sum } = storage.updateLocalStorage(item);
    setCartQuantity(sum);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    validateButton();
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(event.target.value);
    validateButton();
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
    validateButton();
  };

  const validateButton = () => {
    const validation = (rating !== ''
      && (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(email));
    setButtonDisabled(!validation);
    // if (rating === '' && email === '') {
    //   setButtonDisabled(false);
    // }
  };

  const handleSubmitReview = () => {
    if (rating && rating !== '') {
      const newReview: Review = {
        email,
        rating,
        text: comment,
      };
      const updatedReviews = [...reviews, newReview];
      setReviews(updatedReviews);
      // Save reviews to localStorage using the product ID as the key
      const reviewsData = JSON.stringify(updatedReviews);
      localStorage.setItem(`${id}`, reviewsData);
      // Clear form fields
      setEmail('');
      setRating('');
      setComment('');
      setButtonDisabled(false);
    }
  };

  return (
    <>
      <Link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22l0 72 288 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-288 0 0 72c0 9.6-5.7 18.2-14.5 22z" /></svg>
      </Link>
      <br />
      <Link to="/shopping-cart" data-testid="shopping-cart-button">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
        <span data-testid="shopping-cart-size">{cartQuantity}</span>
      </Link>
      <br />
      {product && (
        <main>
          <img
            data-testid="product-detail-image"
            src={ product.thumbnail }
            alt={ product.title }
          />
          <h3 data-testid="product-detail-price">{`R$${product.price.toFixed(2)}`}</h3>
          <h2 data-testid="product-detail-name">{product.title}</h2>
          { product.shipping.free_shipping
                    && <p data-testid="free-shipping">Frete Gátis</p> }
          <button
            key={ `button${product.id}` }
            data-testid="product-detail-add-to-cart"
            onClick={ () => handleUpdateLocalStorage(product) }
          >
            Adicionar ao carrinho
          </button>
          <section>
            <h3>Avaliações</h3>
            <form>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={ email }
                onChange={ handleEmailChange }
                data-testid="product-detail-email"
                required
              />
              <label htmlFor="rating">Rating:</label>
              <div>
                {[1, 2, 3, 4, 5].map((value) => (
                  <label key={ value }>
                    <input
                      type="radio"
                      name="rating"
                      value={ value }
                      checked={ rating === String(value) }
                      onChange={ handleRatingChange }
                      data-testid={ `${value}-rating` }
                      required
                    />
                    {value}
                  </label>
                ))}
              </div>
              <label htmlFor="evaluation">Comentário:</label>
              <textarea
                id="evaluation"
                name="evaluation"
                value={ comment }
                onChange={ handleCommentChange }
                data-testid="product-detail-evaluation"
                required
              />
              <button
                type="button"
                onClick={ handleSubmitReview }
                data-testid="submit-review-btn"
                // disabled={ buttonDisabled }
              >
                Enviar avaliação
              </button>

              {buttonDisabled && <p data-testid="error-msg">Campos inválidos</p> }
            </form>
            <ul>
              {reviews.map((review, index) => (
                <li key={ index }>
                  <p data-testid="review-card-email">
                    { review.email }
                  </p>
                  <p data-testid="review-card-rating">
                    { review.rating }
                  </p>
                  <p data-testid="review-card-evaluation">
                    { review.text }
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </main>
      )}
    </>
  );
}
