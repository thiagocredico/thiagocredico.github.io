import { act } from 'react-dom/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import clipboardCopy from 'clipboard-copy';
import renderWithRouter from '../helpers/renderWithRouter';
import fetch from '../../cypress/mocks/fetch';

import LoginProvider from '../providers/LoginProvider';
import FetchProvider from '../providers/FetchProvider';
import App from '../App';

const CALL_API = 4;
const TWO_SECONDS = 2000;
const MEAL_PATH = '/meals/52771';
const DRINK_PATH = '/drinks/178319';
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

jest.mock('clipboard-copy', () => jest.fn());
jest.useFakeTimers();

describe('Casos de teste da página _RecipeDetails_', () => {
  beforeEach(async () => {
    global.fetch = jest.fn().mockImplementation(fetch);
  });

  it('Renderiza as refeições corretamente', async () => {
    await act(async () => {
      renderWithRouter(
        <FetchProvider>
          <LoginProvider>
            <App />
          </LoginProvider>
        </FetchProvider>,
        MEAL_PATH,
      );
    });

    expect(global.fetch).toHaveBeenCalledTimes(CALL_API);

    const mealImg = screen.getByRole('img', { name: /meal/i });
    expect(mealImg).toBeInTheDocument();

    const mealTitle = screen.getByRole('heading', { name: /spicy arrabiata penne/i });
    expect(mealTitle).toBeInTheDocument();

    const mealCategory = screen.getByText(/vegetarian/i);
    expect(mealCategory).toBeInTheDocument();

    const mealIngredient1 = screen.getByText(/penne rigate - 1 pound/i);
    expect(mealIngredient1).toBeInTheDocument();

    const mealIngredient8 = screen.getByText(/parmigiano-reggiano - spinkling/i);
    expect(mealIngredient8).toBeInTheDocument();

    const mealVideo = screen.getByTitle(/recipe-video/i);
    expect(mealVideo).toBeInTheDocument();

    const swiperCard1 = screen.getByTestId('0-recommendation-card');
    expect(swiperCard1).toBeVisible();

    const swiperCard2 = screen.getByTestId('1-recommendation-card');
    expect(swiperCard2).toBeVisible();
  });

  it('Renderiza os drinks corretamente', async () => {
    await act(async () => {
      renderWithRouter(
        <FetchProvider>
          <LoginProvider>
            <App />
          </LoginProvider>
        </FetchProvider>,
        DRINK_PATH,
      );
    });

    expect(global.fetch).toHaveBeenCalledTimes(CALL_API);

    const drinkTitle = screen.getByRole('heading', { name: /aquamarine/i });
    expect(drinkTitle).toBeInTheDocument();

    const alcoholic = screen.getByText(/alcoholic/i);
    expect(alcoholic).toBeInTheDocument();

    const drinkIngredient1 = screen.getByText(/hpnotiq - 2 oz/i);
    expect(drinkIngredient1).toBeInTheDocument();

    const drinkIngredient3 = screen.getByText(/banana liqueur - 1 oz/i);
    expect(drinkIngredient3).toBeInTheDocument();

    const drinkDescription = screen.getByText(/shake well in a shaker with ice\. strain in a martini glass\./i);
    expect(drinkDescription).toBeInTheDocument();
  });

  it('Verifica se é possível iniciar uma receita', async () => {
    await act(async () => {
      renderWithRouter(
        <FetchProvider>
          <LoginProvider>
            <App />
          </LoginProvider>
        </FetchProvider>,
        '/meals/52977',
      );
    });

    expect(global.fetch).toHaveBeenCalledTimes(CALL_API);

    const startBtn = screen.getByRole('button', {
      name: /start recipe/i,
    });
    expect(startBtn).toBeInTheDocument();
    userEvent.click(startBtn);

    const firstIngredient = screen.getByRole('checkbox', { name: /penne rigate - 1 pound/i });
    userEvent.click(firstIngredient);
    expect(firstIngredient).toBeChecked();
  });

  it('Verifica se o botão de compartilhar existe', async () => {
    await act(async () => {
      renderWithRouter(
        <FetchProvider>
          <LoginProvider>
            <App />
          </LoginProvider>
        </FetchProvider>,
        MEAL_PATH,
      );
    });
    expect(global.fetch).toHaveBeenCalledTimes(CALL_API);

    const shareButton = screen.getByTestId('share-btn');
    expect(shareButton).toBeInTheDocument();

    userEvent.click(shareButton);
    expect(clipboardCopy).toHaveBeenCalledWith('http://localhost:3000/meals/52771');

    act(() => {
      jest.advanceTimersByTime(TWO_SECONDS);
    });

    expect(screen.queryByText('Link copied!')).not.toBeInTheDocument();
  });

  it('Verifica se o botão de favoritar funciona corretamente para Meals', async () => {
    await act(async () => {
      renderWithRouter(
        <FetchProvider>
          <LoginProvider>
            <App />
          </LoginProvider>
        </FetchProvider>,
        MEAL_PATH,
      );
    });

    const favoriteBtn = screen.getByRole('button', {
      name: /favorite-recipe/i,
    });
    const whiteHeartImg = screen.getByRole('img', {
      name: /favorite-recipe/i,
    });
    expect(whiteHeartImg.src).toContain('whiteHeart');
    userEvent.click(favoriteBtn);

    const blackHeartImg = screen.getByRole('img', {
      name: /favorite-recipe/i,
    });
    expect(blackHeartImg.src).toContain('blackHeart');
    userEvent.click(favoriteBtn);
    expect(whiteHeartImg).toBeInTheDocument();
  });

  it('Verifica se o botão de favoritar funciona corretamente para Drinks', async () => {
    await act(async () => {
      renderWithRouter(
        <FetchProvider>
          <LoginProvider>
            <App />
          </LoginProvider>
        </FetchProvider>,
        DRINK_PATH,
      );
    });

    const favoriteBtn = screen.getByRole('button', {
      name: /favorite-recipe/i,
    });
    const whiteHeartImg = screen.getByRole('img', {
      name: /favorite-recipe/i,
    });
    expect(whiteHeartImg.src).toContain('whiteHeart');
    userEvent.click(favoriteBtn);

    const blackHeartImg = screen.getByRole('img', {
      name: /favorite-recipe/i,
    });
    expect(blackHeartImg.src).toContain('blackHeart');
    userEvent.click(favoriteBtn);
    expect(whiteHeartImg).toBeInTheDocument();
  });

  it('Verifica se o botão de favoritar funciona corretamente para Drinks', async () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
    await act(async () => {
      renderWithRouter(
        <FetchProvider>
          <LoginProvider>
            <App />
          </LoginProvider>
        </FetchProvider>,
        DRINK_PATH,
      );
    });

    const blackHeartImg = screen.getByRole('img', {
      name: /favorite-recipe/i,
    });
    expect(blackHeartImg.src).toContain('blackHeart');
  });
});
