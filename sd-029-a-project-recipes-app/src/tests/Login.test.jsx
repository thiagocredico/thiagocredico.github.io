import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import LoginProvider from '../providers/LoginProvider';
import App from '../App';
import FetchProvider from '../providers/FetchProvider';

describe('Casos de teste da página de _Login_', () => {
  it('Testa inputs da página de login', () => {
    render(
      <BrowserRouter>
        <LoginProvider>
          <FetchProvider>
            <App />
          </FetchProvider>
        </LoginProvider>
      </BrowserRouter>,
    );

    const email = screen.getByRole('textbox');
    expect(email).toBeInTheDocument();

    const password = screen.getByPlaceholderText(/senha/i);
    expect(password).toBeInTheDocument();

    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();

    userEvent.type(email, 'email@test.com');
    userEvent.type(password, '1234567');
    expect(btn).toBeEnabled();

    userEvent.click(btn);
  });
});
