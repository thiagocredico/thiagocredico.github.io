import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import clipboardCopy from 'clipboard-copy';

import renderWithRouter from '../helpers/renderWithRouter';

import LoginProvider from '../providers/LoginProvider';
import FetchProvider from '../providers/FetchProvider';
import App from '../App';

const doneRecipes = [
  {
    id: '52771',
    type: 'meal',
    nationality: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    doneDate: '23/06/2020',
    tags: ['Pasta', 'Curry'],
  },
  {
    id: '178319',
    type: 'drink',
    nationality: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    doneDate: '23/06/2020',
    tags: [],
  },
];
const ROUTE = '/done-recipes';

jest.mock('clipboard-copy', () => jest.fn());

describe('Casos de teste da tela _DoneRecipes_', () => {
  beforeEach(() => {
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
  });

  it('Renderiza as receitas feitas corretamente', () => {
    renderWithRouter(
      <LoginProvider>
        <FetchProvider>
          <App />
        </FetchProvider>
      </LoginProvider>,
      ROUTE,
    );

    const mealTitle = screen.getByRole('heading', { name: /spicy arrabiata penne/i });
    expect(mealTitle).toBeInTheDocument();

    const mealImg = screen.getByRole('img', {
      name: /spicy arrabiata penne/i,
    });
    expect(mealImg).toBeInTheDocument();

    const drinkImg = screen.getByRole('img', { name: /aquamarine/i });
    expect(drinkImg).toBeInTheDocument();

    const drinkTitle = screen.getByRole('heading', { name: /aquamarine/i });
    expect(drinkTitle).toBeInTheDocument();
  });

  it(
    'Botões de compartilhamento da página _DoneRecipes_ funcionam como esperado',
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

    const mealTitle = screen.getByRole('heading', { name: /spicy arrabiata penne/i });
    expect(mealTitle).toBeInTheDocument();

    const drinkBtn = screen.getByRole('button', { name: /drinks/i });
    expect(drinkBtn).toBeInTheDocument();
    userEvent.click(drinkBtn);

    expect(mealTitle).not.toBeInTheDocument();

    const drinkTitle = screen.getByRole('heading', { name: /aquamarine/i });
    expect(drinkTitle).toBeInTheDocument();

    const mealBtn = screen.getByRole('button', { name: /meals/i });
    expect(mealBtn).toBeInTheDocument();
    userEvent.click(mealBtn);

    expect(drinkTitle).not.toBeInTheDocument();

    const allBtn = screen.getByRole('button', { name: /all/i });
    expect(allBtn).toBeInTheDocument();
    userEvent.click(allBtn);

    expect(screen.getByRole('img', { name: /spicy arrabiata penne/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /aquamarine/i })).toBeInTheDocument();
  });
});
