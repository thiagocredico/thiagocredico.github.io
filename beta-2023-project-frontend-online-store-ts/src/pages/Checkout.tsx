import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface UserData {
  fullName: string;
  email: string;
  cpf: string;
  phone: string;
  cep: string;
  address: string;
  payment: string;
}

interface Product {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

export default function Checkout() {
  const [productsOnCart, setProductsOnCart] = useState<Product[]>([]);
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData>({
    fullName: '',
    email: '',
    cpf: '',
    phone: '',
    cep: '',
    address: '',
    payment: '',
  });
  const [isInputsInvalids, setIsInputsInvalids] = useState(false);
  const { fullName, email, cpf, phone, cep, address, payment } = userData;
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setIsInputsInvalids(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const states = [fullName, email, cpf, phone, cep, address, payment];
    const isLength0 = states.some((state) => !state);
    if (isLength0) {
      setIsInputsInvalids(true);
      return;
    }
    localStorage.removeItem('cartItems');
    localStorage.removeItem('cartQuantity');
    navigate('/shopping-cart');
  };

  useEffect(() => {
    getCartItensFromStorage();
  }, []);

  const getCartItensFromStorage = () => {
    const storageData = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const storageQuantity = JSON.parse(localStorage.getItem('cartQuantity') ?? '0');
    setProductsOnCart(storageData);
    setCartQuantity(storageQuantity);
  };

  const totalPrice = productsOnCart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);

  return (
    <form onSubmit={ handleSubmit }>
      <Link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22l0 72 288 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-288 0 0 72c0 9.6-5.7 18.2-14.5 22z" /></svg>
      </Link>
      <br />
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
      <span data-testid="shopping-cart-size">{cartQuantity}</span>
      <section>
        <h1>
          Revise seus pedidos
        </h1>
        {productsOnCart.map((product) => (
          <section key={ product.id }>
            <img src={ product.thumbnail } alt={ product.title } />
            <Link to={ `/product-details/${product.id}` }>
              <h3>
                {product.title}
              </h3>
            </Link>
            <p>{`R$ ${(product.price * product.quantity).toFixed(2)}`}</p>
            <p>{`Quantidade: ${product.quantity}`}</p>
          </section>
        ))}
        <p>
          {`Total: R$ ${totalPrice}`}
        </p>
      </section>
      <h1>Informações do Comprador</h1>
      <span />
      <label htmlFor="fullName">
        Nome Completo
      </label>
      <input
        id="fullName"
        name="fullName"
        type="text"
        className="form-input"
        value={ fullName }
        onChange={ handleChange }
        data-testid="checkout-fullname"
      />
      <label htmlFor="email">
        Email
      </label>
      <input
        id="email"
        type="email"
        className="form-input"
        name="email"
        value={ email }
        onChange={ handleChange }
        data-testid="checkout-email"
      />
      <label htmlFor="cpf">
        CPF
      </label>
      <input
        id="cpf"
        name="cpf"
        type="text"
        className="form-input"
        value={ cpf }
        onChange={ handleChange }
        data-testid="checkout-cpf"
      />
      <label htmlFor="phone">
        Telefone
      </label>
      <input
        id="phone"
        name="phone"
        type="text"
        className="form-input"
        value={ phone }
        onChange={ handleChange }
        data-testid="checkout-phone"
      />
      <label htmlFor="cep">
        CEP
      </label>
      <input
        id="cep"
        name="cep"
        type="text"
        className="form-input"
        value={ cep }
        onChange={ handleChange }
        data-testid="checkout-cep"
      />
      <label htmlFor="address">
        Endereço
      </label>
      <input
        id="address"
        name="address"
        type="text"
        className="form-input"
        value={ address }
        onChange={ handleChange }
        data-testid="checkout-address"
      />
      <h1 className="font-bold">Método de Pagamento</h1>
      <span />
      <div className="flex justify-around col-span-2">
        <div className="flex flex-col gap-4">
          <h1>Boleto</h1>

          <label
            htmlFor="ticketPayment"
            className="flex items-center gap-2"
          >
            <input
              type="radio"
              name="payment"
              id="ticketPayment"
              className="form-radio"
              value="ticketPayment"
              checked={ payment === 'ticketPayment' }
              onChange={ handleChange }
              data-testid="ticket-payment"
            />
          </label>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M24 32C10.7 32 0 42.7 0 56V456c0 13.3 10.7 24 24 24H40c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H24zm88 0c-8.8 0-16 7.2-16 16V464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16zm72 0c-13.3 0-24 10.7-24 24V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H184zm96 0c-13.3 0-24 10.7-24 24V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H280zM448 56V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H472c-13.3 0-24 10.7-24 24zm-64-8V464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16s-16 7.2-16 16z" /></svg>
        </div>
        <div>
          <h1>Cartão de crédito</h1>
          <label htmlFor="visaPayment">
            <input
              type="radio"
              name="payment"
              id="visaPayment"
              value="visaPayment"
              checked={ payment === 'visaPayment' }
              onChange={ handleChange }
              data-testid="visa-payment"
            />
            Visa
          </label>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2.3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4.2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2.2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2.1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z" /></svg>
          <label htmlFor="masterPayment">
            <input
              type="radio"
              name="payment"
              id="masterPayment"
              value="masterPayment"
              checked={ payment === 'masterPayment' }
              onChange={ handleChange }
              data-testid="master-payment"
            />
            Master
          </label>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M482.9 410.3c0 6.8-4.6 11.7-11.2 11.7-6.8 0-11.2-5.2-11.2-11.7 0-6.5 4.4-11.7 11.2-11.7 6.6 0 11.2 5.2 11.2 11.7zm-310.8-11.7c-7.1 0-11.2 5.2-11.2 11.7 0 6.5 4.1 11.7 11.2 11.7 6.5 0 10.9-4.9 10.9-11.7-.1-6.5-4.4-11.7-10.9-11.7zm117.5-.3c-5.4 0-8.7 3.5-9.5 8.7h19.1c-.9-5.7-4.4-8.7-9.6-8.7zm107.8.3c-6.8 0-10.9 5.2-10.9 11.7 0 6.5 4.1 11.7 10.9 11.7 6.8 0 11.2-4.9 11.2-11.7 0-6.5-4.4-11.7-11.2-11.7zm105.9 26.1c0 .3.3.5.3 1.1 0 .3-.3.5-.3 1.1-.3.3-.3.5-.5.8-.3.3-.5.5-1.1.5-.3.3-.5.3-1.1.3-.3 0-.5 0-1.1-.3-.3 0-.5-.3-.8-.5-.3-.3-.5-.5-.5-.8-.3-.5-.3-.8-.3-1.1 0-.5 0-.8.3-1.1 0-.5.3-.8.5-1.1.3-.3.5-.3.8-.5.5-.3.8-.3 1.1-.3.5 0 .8 0 1.1.3.5.3.8.3 1.1.5s.2.6.5 1.1zm-2.2 1.4c.5 0 .5-.3.8-.3.3-.3.3-.5.3-.8 0-.3 0-.5-.3-.8-.3 0-.5-.3-1.1-.3h-1.6v3.5h.8V426h.3l1.1 1.4h.8l-1.1-1.3zM576 81v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V81c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM64 220.6c0 76.5 62.1 138.5 138.5 138.5 27.2 0 53.9-8.2 76.5-23.1-72.9-59.3-72.4-171.2 0-230.5-22.6-15-49.3-23.1-76.5-23.1-76.4-.1-138.5 62-138.5 138.2zm224 108.8c70.5-55 70.2-162.2 0-217.5-70.2 55.3-70.5 162.6 0 217.5zm-142.3 76.3c0-8.7-5.7-14.4-14.7-14.7-4.6 0-9.5 1.4-12.8 6.5-2.4-4.1-6.5-6.5-12.2-6.5-3.8 0-7.6 1.4-10.6 5.4V392h-8.2v36.7h8.2c0-18.9-2.5-30.2 9-30.2 10.2 0 8.2 10.2 8.2 30.2h7.9c0-18.3-2.5-30.2 9-30.2 10.2 0 8.2 10 8.2 30.2h8.2v-23zm44.9-13.7h-7.9v4.4c-2.7-3.3-6.5-5.4-11.7-5.4-10.3 0-18.2 8.2-18.2 19.3 0 11.2 7.9 19.3 18.2 19.3 5.2 0 9-1.9 11.7-5.4v4.6h7.9V392zm40.5 25.6c0-15-22.9-8.2-22.9-15.2 0-5.7 11.9-4.8 18.5-1.1l3.3-6.5c-9.4-6.1-30.2-6-30.2 8.2 0 14.3 22.9 8.3 22.9 15 0 6.3-13.5 5.8-20.7.8l-3.5 6.3c11.2 7.6 32.6 6 32.6-7.5zm35.4 9.3l-2.2-6.8c-3.8 2.1-12.2 4.4-12.2-4.1v-16.6h13.1V392h-13.1v-11.2h-8.2V392h-7.6v7.3h7.6V416c0 17.6 17.3 14.4 22.6 10.9zm13.3-13.4h27.5c0-16.2-7.4-22.6-17.4-22.6-10.6 0-18.2 7.9-18.2 19.3 0 20.5 22.6 23.9 33.8 14.2l-3.8-6c-7.8 6.4-19.6 5.8-21.9-4.9zm59.1-21.5c-4.6-2-11.6-1.8-15.2 4.4V392h-8.2v36.7h8.2V408c0-11.6 9.5-10.1 12.8-8.4l2.4-7.6zm10.6 18.3c0-11.4 11.6-15.1 20.7-8.4l3.8-6.5c-11.6-9.1-32.7-4.1-32.7 15 0 19.8 22.4 23.8 32.7 15l-3.8-6.5c-9.2 6.5-20.7 2.6-20.7-8.6zm66.7-18.3H408v4.4c-8.3-11-29.9-4.8-29.9 13.9 0 19.2 22.4 24.7 29.9 13.9v4.6h8.2V392zm33.7 0c-2.4-1.2-11-2.9-15.2 4.4V392h-7.9v36.7h7.9V408c0-11 9-10.3 12.8-8.4l2.4-7.6zm40.3-14.9h-7.9v19.3c-8.2-10.9-29.9-5.1-29.9 13.9 0 19.4 22.5 24.6 29.9 13.9v4.6h7.9v-51.7zm7.6-75.1v4.6h.8V302h1.9v-.8h-4.6v.8h1.9zm6.6 123.8c0-.5 0-1.1-.3-1.6-.3-.3-.5-.8-.8-1.1-.3-.3-.8-.5-1.1-.8-.5 0-1.1-.3-1.6-.3-.3 0-.8.3-1.4.3-.5.3-.8.5-1.1.8-.5.3-.8.8-.8 1.1-.3.5-.3 1.1-.3 1.6 0 .3 0 .8.3 1.4 0 .3.3.8.8 1.1.3.3.5.5 1.1.8.5.3 1.1.3 1.4.3.5 0 1.1 0 1.6-.3.3-.3.8-.5 1.1-.8.3-.3.5-.8.8-1.1.3-.6.3-1.1.3-1.4zm3.2-124.7h-1.4l-1.6 3.5-1.6-3.5h-1.4v5.4h.8v-4.1l1.6 3.5h1.1l1.4-3.5v4.1h1.1v-5.4zm4.4-80.5c0-76.2-62.1-138.3-138.5-138.3-27.2 0-53.9 8.2-76.5 23.1 72.1 59.3 73.2 171.5 0 230.5 22.6 15 49.5 23.1 76.5 23.1 76.4.1 138.5-61.9 138.5-138.4z" /></svg>
          <label htmlFor="eloPayment">
            <input
              type="radio"
              name="payment"
              value="eloPayment"
              id="eloPayment"
              checked={ payment === 'eloPayment' }
              onChange={ handleChange }
              data-testid="elo-payment"
            />
            Elo
          </label>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z" /></svg>
        </div>
      </div>
      <button
        type="submit"
        data-testid="checkout-btn"
      >
        Enviar
      </button>
      {isInputsInvalids && <p data-testid="error-msg">Campos inválidos</p>}
    </form>
  );
}
