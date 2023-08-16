import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Testa página Login', () => {
  it('Existem dois inputs e um botão desabilitado'
  + 'o botão só é habilido com email e senha', () => {
    const { getByTestId, getByRole } = renderWithRouterAndRedux(<App />);

    const inputEmail = getByTestId('email-input');
    const inputPassword = getByTestId('password-input');
    const button = getByRole('button');

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();

    userEvent.type(inputEmail, 'pessoa@betrybe.com');
    userEvent.type(inputPassword, '123456');
    expect(button).toBeEnabled();

    userEvent.clear(inputEmail);
    userEvent.clear(inputPassword);
  });

  it('Clicar no botão "Entrar" direciona para página "/carteira"'
  + 'O email digitado está na página e salvo no GlobalStore', () => {
    const { getByTestId, getByRole, history, store } = renderWithRouterAndRedux(<App />);

    const inputEmail = getByTestId('email-input');
    const inputPassword = getByTestId('password-input');
    const button = getByRole('button');

    userEvent.type(inputEmail, 'pessoa2@betrybe.com');
    userEvent.type(inputPassword, '123456');
    userEvent.click(button);

    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
    expect(store.getState().user.email).toBe('pessoa2@betrybe.com');
  });
});
