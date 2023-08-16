import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import LoginProvider from '../providers/LoginProvider';
import Recipes from '../pages/Recipes';
import renderWithRouter from '../helpers/renderWithRouter';
import fetch from '../../cypress/mocks/fetch';
import FetchProvider from '../providers/FetchProvider';

const ALL_CATEGORY_FILTER = 'All-category-filter';
const DRINKS_BTN = 'drinks-bottom-btn';
const BEEF_CATEGORY_FILTER = 'Beef-category-filter';
const ONDINARY_DRINK_CATEGORY_FILTER = 'Ordinary Drink-category-filter';

describe('Testa a página de receitas', () => {
  beforeEach(async () => {
    global.fetch = jest.fn().mockImplementation(fetch);

    await act(async () => {
      renderWithRouter(
        <FetchProvider>
          <LoginProvider>
            <Recipes />
          </LoginProvider>
        </FetchProvider>,
        '/meals',
      );
    });
  });

  it('testa o filtro da categoria Beef', async () => {
    const ENDPOINT_TO_REQUEST = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';

    await act(async () => {
      const categoryBeef = screen.getByTestId(BEEF_CATEGORY_FILTER);
      expect(categoryBeef).toBeInTheDocument();
      userEvent.click(categoryBeef);
    });

    expect(global.fetch).toBeCalledWith(ENDPOINT_TO_REQUEST);
  });

  it('testa o se o botão redireciona para pagina Drinks', async () => {
    const ENDPOINT_TO_REQUEST = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

    await act(async () => {
      const buttonDrink = screen.getByTestId(DRINKS_BTN);
      userEvent.click(buttonDrink);
    });

    expect(global.fetch).toBeCalledWith(ENDPOINT_TO_REQUEST);
  });

  it('testa o filtro da categoria Ordinary Drink', async () => {
    const ENDPOINT_TO_REQUEST = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary Drink';

    await act(async () => {
      const buttonDrink = screen.getByTestId(DRINKS_BTN);
      userEvent.click(buttonDrink);
    });

    await act(async () => {
      const categoryOrdinaryDrink = screen.getByTestId(ONDINARY_DRINK_CATEGORY_FILTER);
      expect(categoryOrdinaryDrink).toBeInTheDocument();
      userEvent.click(categoryOrdinaryDrink);
    });

    expect(global.fetch).toBeCalledWith(ENDPOINT_TO_REQUEST);
  });

  it('testa o clique na All pagina Meals', async () => {
    await act(async () => {
      const categoryBeef = screen.getByTestId(BEEF_CATEGORY_FILTER);
      expect(categoryBeef).toBeInTheDocument();
      userEvent.click(categoryBeef);
    });

    const buttonAll = screen.getByTestId(ALL_CATEGORY_FILTER);
    expect(buttonAll).toBeInTheDocument();
    userEvent.click(buttonAll);
    expect(screen.getByTestId(ALL_CATEGORY_FILTER)).toBeInTheDocument();
    expect(screen.getByTestId('5-recipe-card')).toBeInTheDocument();
  });

  it('testa o clique na All pagina Drinks', async () => {
    await act(async () => {
      const buttonDrink = screen.getByTestId(DRINKS_BTN);
      userEvent.click(buttonDrink);
    });

    await act(async () => {
      const categoryOrdinaryDrink = screen.getByTestId(ONDINARY_DRINK_CATEGORY_FILTER);
      expect(categoryOrdinaryDrink).toBeInTheDocument();
      userEvent.click(categoryOrdinaryDrink);
    });

    const buttonAll = screen.getByTestId(ALL_CATEGORY_FILTER);
    expect(buttonAll).toBeInTheDocument();
    userEvent.click(buttonAll);
    expect(screen.getByTestId(ALL_CATEGORY_FILTER)).toBeInTheDocument();
    expect(screen.getByTestId('0-recipe-card')).toBeInTheDocument();
  });

  it('testa valores recebidos pagina Meals quando categorias são clicadas', async () => {
    await act(async () => {
      const categoryBeef = screen.getByTestId(BEEF_CATEGORY_FILTER);
      expect(categoryBeef).toBeInTheDocument();
      userEvent.click(categoryBeef);
    });
    expect(screen.getByText(/beef and mustard pie/i)).toBeInTheDocument();
    expect(screen.getByText(/beef and oyster pie/i)).toBeInTheDocument();

    const categoryBeef = screen.getByTestId(BEEF_CATEGORY_FILTER);
    expect(categoryBeef).toBeInTheDocument();
    userEvent.click(categoryBeef);

    expect(screen.getByText(/corba/i)).toBeInTheDocument();
    expect(screen.getByText(/kumpir/i)).toBeInTheDocument();

    await act(async () => {
      const categoryBreakfast = screen.getByTestId('Breakfast-category-filter');
      expect(categoryBreakfast).toBeInTheDocument();
      userEvent.click(categoryBreakfast);
    });

    expect(screen.getByText(/breakfast potatoes/i)).toBeInTheDocument();
    expect(screen.getByText('English Breakfast')).toBeInTheDocument();
  });

  it('testa valores recebidos pagina Drinks quando categorias são clicadas', async () => {
    await act(async () => {
      const buttonDrink = screen.getByTestId(DRINKS_BTN);
      userEvent.click(buttonDrink);
    });

    expect(screen.getByText(/gg/i)).toBeInTheDocument();
    expect(screen.getByText(/adam/i)).toBeInTheDocument();

    await act(async () => {
      const categoryOrdinaryDrink = screen.getByTestId(ONDINARY_DRINK_CATEGORY_FILTER);
      expect(categoryOrdinaryDrink).toBeInTheDocument();
      userEvent.click(categoryOrdinaryDrink);
    });

    expect(screen.getByText(/3-mile long island iced tea/i)).toBeInTheDocument();
    expect(screen.getByText(/410 gone/i)).toBeInTheDocument();

    const categoryOrdinaryDrink = screen.getByTestId(ONDINARY_DRINK_CATEGORY_FILTER);
    expect(categoryOrdinaryDrink).toBeInTheDocument();
    userEvent.click(categoryOrdinaryDrink);

    expect(screen.getByText(/gg/i)).toBeInTheDocument();
    expect(screen.getByText(/adam/i)).toBeInTheDocument();
  });
});
