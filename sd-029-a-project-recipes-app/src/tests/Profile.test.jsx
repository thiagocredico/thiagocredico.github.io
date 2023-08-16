import { fireEvent, screen } from '@testing-library/react';
import LoginProvider from '../providers/LoginProvider';
import renderWithRouter from '../helpers/renderWithRouter';
import FetchProvider from '../providers/FetchProvider';
import Profile from '../pages/Profile';

describe('Verifique se o componente Profile', () => {
  it('é renderizado na tela', () => {
    renderWithRouter(
      <FetchProvider>
        <LoginProvider>
          <Profile />
        </LoginProvider>
      </FetchProvider>,
      '/',
    );
    const profileEl = screen.getByTestId('profile-component');
    expect(profileEl).toBeInTheDocument();
  });

  it('Deve limpar o localStorage e redirecionar para o Login', () => {
    const { getByTestId } = renderWithRouter(
      <FetchProvider>
        <LoginProvider>
          <Profile />
        </LoginProvider>
      </FetchProvider>,
      '/',
    );

    localStorage.setItem('user', JSON.stringify({ email: 'test@example.com' }));
    const logoutBtn = getByTestId('profile-logout-btn');
    expect(logoutBtn).toBeInTheDocument();

    fireEvent.click(logoutBtn);
    expect(localStorage.getItem('user')).toBeNull();

    const { pathname } = window.location;
    expect(pathname).toBe('/');
  });
});
