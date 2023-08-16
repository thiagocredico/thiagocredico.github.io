import { screen, render, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import LoginProvider from '../providers/LoginProvider';
import FetchProvider from '../providers/FetchProvider';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Casos de teste da página de _Login_', () => {
  it('Testa inputs da página de login', async () => {
    render(
      <BrowserRouter>
        <LoginProvider>
          <FetchProvider>
            <App />
          </FetchProvider>
        </LoginProvider>
      </BrowserRouter>,
    );

    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByPlaceholderText(/senha/i);
    const btn = screen.getByRole('button');
    userEvent.type(emailInput, 'email@test.com');
    userEvent.type(passwordInput, '1234567');
    userEvent.click(btn);

    const searchBtn = screen.getByRole('button', { name: /search-icon/i });
    userEvent.click(searchBtn);

    const searchInput = screen.getByRole('textbox');
    userEvent.type(searchInput, 'Testando o meu Input');

    expect(searchInput).toHaveValue('Testando o meu Input');

    expect(searchInput).toBeInTheDocument();

    userEvent.click(searchBtn);

    expect(searchInput).not.toBeInTheDocument();

    const profileBtn = screen.getByRole('img', { name: /profile/i });
    userEvent.click(profileBtn);

    const profileTxt = screen.findByRole('heading', { name: /profile/i });
    waitFor(() => expect(profileTxt).toBeInTheDocument());
  });

  it('Testa se o redirecionamento acontece', async () => {
    const { history } = renderWithRouter(
      <LoginProvider>
        <FetchProvider>
          <App />
        </FetchProvider>
      </LoginProvider>,
    );
    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByPlaceholderText(/senha/i);
    const btn = screen.getByRole('button');
    userEvent.type(emailInput, 'email@test.com');
    userEvent.type(passwordInput, '1234567');
    userEvent.click(btn);
    const profileBtn = screen.getByTestId('btn-profile');
    userEvent.click(profileBtn);
    expect(history.location.pathname).toBe('/profile');
  });
});
