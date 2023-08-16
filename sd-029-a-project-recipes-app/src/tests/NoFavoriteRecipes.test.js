import { screen } from '@testing-library/react';

import renderWithRouter from '../helpers/renderWithRouter';

import LoginProvider from '../providers/LoginProvider';
import FetchProvider from '../providers/FetchProvider';
import App from '../App';

const favoriteRecipes = null;
const ROUTE = '/favorite-recipes';

jest.mock('clipboard-copy', () => jest.fn());

describe('Casos de teste da tela "FavoriteRecipes" vazia', () => {
  beforeEach(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  });

  it('Verifica se não há renderização conforme esperado', () => {
    renderWithRouter(
      <LoginProvider>
        <FetchProvider>
          <App />
        </FetchProvider>
      </LoginProvider>,
      ROUTE,
    );

    const blackHeartBtn = screen.queryByTestId('0-horizontal-favorite-btn');
    expect(blackHeartBtn).toBeNull();
  });
});
