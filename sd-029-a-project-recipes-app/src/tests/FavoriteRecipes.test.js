import { screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import clipboardCopy from 'clipboard-copy';

import renderWithRouter from '../helpers/renderWithRouter';

import LoginProvider from '../providers/LoginProvider';
import FetchProvider from '../providers/FetchProvider';
import App from '../App';

const favoriteRecipes = [
  {
    id: '52771',
    type: 'meal',
    nationality: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
  },
  {
    id: '178319',
    type: 'drink',
    nationality: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
  },
];
const ROUTE = '/favorite-recipes';

jest.mock('clipboard-copy', () => jest.fn());

describe('Casos de teste da tela "FavoriteRecipes"', () => {
  beforeEach(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  });

  it('Renderiza as receitas favoritadas corretamente', () => {
    renderWithRouter(
      <LoginProvider>
        <FetchProvider>
          <App />
        </FetchProvider>
      </LoginProvider>,
      ROUTE,
    );

    const mealImg = screen.getByRole('img', {
      name: /spicy arrabiata penne/i,
    });
    expect(mealImg).toBeInTheDocument();

    const drinkImg = screen.getByRole('img', { name: /aquamarine/i });
    expect(drinkImg).toBeInTheDocument();
  });

  it(
    'Botões de compartilhamento funcionam como esperado',
    async () => {
      renderWithRouter(
        <LoginProvider>
          <FetchProvider>
            <App />
          </FetchProvider>
        </LoginProvider>,
        ROUTE,
      );

      const shareBtn = screen.getAllByAltText('share-icon');
      expect(shareBtn).toHaveLength(2);

      userEvent.click(shareBtn[0]);

      expect(clipboardCopy).toHaveBeenCalledWith('http://localhost:3000/meals/52771');

      userEvent.click(shareBtn[1]);
      expect(clipboardCopy).toHaveBeenCalledWith('http://localhost:3000/drinks/178319');
      const linkCopied = screen.getAllByText('Link copied!');
      waitForElementToBeRemoved(linkCopied, { timeout: 5000 });
      await waitFor(async () => waitForElementToBeRemoved(linkCopied, { timeout: 5000 }));
    },
  );

  it('Botões de filtro funcionam corretamente', () => {
    renderWithRouter(
      <LoginProvider>
        <FetchProvider>
          <App />
        </FetchProvider>
      </LoginProvider>,
      ROUTE,
    );

    const mealImg = screen.getByRole('img', {
      name: /spicy arrabiata penne/i,
    });
    expect(mealImg).toBeInTheDocument();

    const drinkImg = screen.getByRole('img', { name: /aquamarine/i });
    expect(drinkImg).toBeInTheDocument();

    const drinkBtn = screen.getByRole('button', { name: /drinks/i });
    expect(drinkBtn).toBeInTheDocument();
    userEvent.click(drinkBtn);

    expect(mealImg).not.toBeInTheDocument();
    expect(drinkImg).toBeInTheDocument();

    const mealBtn = screen.getByRole('button', { name: /meals/i });
    expect(mealBtn).toBeInTheDocument();
    userEvent.click(mealBtn);

    expect(drinkImg).not.toBeInTheDocument();
    waitFor(() => expect(mealImg).toBeInTheDocument());

    const allBtn = screen.getByRole('button', { name: /all/i });
    expect(allBtn).toBeInTheDocument();
    userEvent.click(allBtn);

    waitFor(() => expect(mealImg).toBeInTheDocument());
    waitFor(() => expect(drinkImg).toBeInTheDocument());
  });

  it('Botão desfavoritar funciona corretamente', () => {
    renderWithRouter(
      <LoginProvider>
        <FetchProvider>
          <App />
        </FetchProvider>
      </LoginProvider>,
      ROUTE,
    );

    const mealImg = screen.getByRole('img', {
      name: /spicy arrabiata penne/i,
    });
    expect(mealImg).toBeInTheDocument();

    const drinkImg = screen.getByRole('img', { name: /aquamarine/i });
    expect(drinkImg).toBeInTheDocument();

    const blackHeartBtn = screen.getByTestId('0-horizontal-favorite-btn');
    expect(blackHeartBtn).toBeInTheDocument();
    userEvent.click(blackHeartBtn);

    expect(mealImg).not.toBeInTheDocument();
    expect(drinkImg).toBeInTheDocument();

    const blackHeartBtn2 = screen.getByTestId('0-horizontal-favorite-btn');
    expect(blackHeartBtn2).toBeInTheDocument();
    userEvent.click(blackHeartBtn2);

    expect(drinkImg).not.toBeInTheDocument();
  });
});
