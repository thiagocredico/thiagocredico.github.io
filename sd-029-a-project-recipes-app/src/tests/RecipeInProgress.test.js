import { act } from 'react-dom/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithRouter from '../helpers/renderWithRouter';
import fetch from '../../cypress/mocks/fetch';

import LoginProvider from '../providers/LoginProvider';
import FetchProvider from '../providers/FetchProvider';
import App from '../App';

const CALL_API = 4;
const MEAL_PATH = '/meals/52771';
const DRINK_PATH = '/drinks/178319';

jest.mock('clipboard-copy', () => jest.fn());

describe('Casos de teste da página "RecipeInProgress"', () => {
  beforeEach(async () => {
    global.fetch = jest.fn().mockImplementation(fetch);
  });

  it('Verifica se é possível finalizar uma receita de Drink', async () => {
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

    const startBtn = screen.getByRole('button', {
      name: /start recipe/i,
    });
    expect(startBtn).toBeInTheDocument();
    userEvent.click(startBtn);

    const Ingredient1 = screen.getByRole('checkbox', { name: /hpnotiq/i });
    const Ingredient2 = screen.getByRole('checkbox', { name: /pineapple/i });
    const Ingredient3 = screen.getByRole('checkbox', { name: /banana/i });

    userEvent.click(Ingredient1);
    userEvent.click(Ingredient2);
    userEvent.click(Ingredient3);

    expect(Ingredient3).toBeChecked();

    const finishButton = screen.getByRole('button', { name: /finish recipe/i });
    userEvent.click(finishButton);

    const doneRecipes = screen.getByRole('heading', { name: /done recipes/i });
    expect(doneRecipes).toBeInTheDocument();
  });

  it('Verifica se é possível finalizar uma receita de Meal', async () => {
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

    const startBtn = screen.getByRole('button', {
      name: /start recipe/i,
    });
    expect(startBtn).toBeInTheDocument();
    userEvent.click(startBtn);

    const Ingredient1 = screen.getByRole('checkbox', { name: /penne rigate/i });
    const Ingredient2 = screen.getByRole('checkbox', { name: /olive oil/i });
    const Ingredient3 = screen.getByRole('checkbox', { name: /garlic/i });
    const Ingredient4 = screen.getByRole('checkbox', { name: /tomatoes/i });
    const Ingredient5 = screen.getByRole('checkbox', { name: /red chile/i });
    const Ingredient6 = screen.getByRole('checkbox', { name: /italian seasoning/i });
    const Ingredient7 = screen.getByRole('checkbox', { name: /basil/i });
    const Ingredient8 = screen.getByRole('checkbox', { name: /parmigiano-reggiano/i });

    userEvent.click(Ingredient1);
    userEvent.click(Ingredient2);
    userEvent.click(Ingredient3);
    userEvent.click(Ingredient4);
    userEvent.click(Ingredient5);
    userEvent.click(Ingredient6);
    userEvent.click(Ingredient7);
    userEvent.click(Ingredient8);

    expect(Ingredient8).toBeChecked();

    const finishButton = screen.getByRole('button', { name: /finish recipe/i });
    userEvent.click(finishButton);

    const doneRecipes = screen.getByRole('heading', { name: /done recipes/i });
    expect(doneRecipes).toBeInTheDocument();
  });
});
