import React from 'react';
import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  it('O primeiro link deve possuir o texto Home', () => {
    const { getByText } = renderWithRouter(<App />);
    const homeLink = getByText(/Home/);
    expect(homeLink).toBeInTheDocument();
  });

  it('O segundo link deve possuir o texto About', () => {
    const { getByText } = renderWithRouter(<App />);
    const homeLink = getByText(/About/);
    expect(homeLink).toBeInTheDocument();
  });

  it('O segundo link deve possuir o texto Favorite Pokémon', () => {
    const { getByText } = renderWithRouter(<App />);
    const homeLink = getByText(/Favorite Pokémon/);
    expect(homeLink).toBeInTheDocument();
  });
});

describe('Testa os links Home, About e Favorite Pokémon na barra de navegação', () => {
  it('A aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home', () => {
    const { getByText } = renderWithRouter(<App />);
    const homeLink = getByText(/Home/);
    userEvent.click(homeLink);
    const { history } = renderWithRouter(<App />);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  it('A aplicação é redirecionada para a página About, na URL /about ao clicar no link About', () => {
    const { getByText } = renderWithRouter(<App />);
    const homeLink = getByText(/About/);
    userEvent.click(homeLink);
    const { history } = renderWithRouter(<App />);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  it('A aplicação é redirecionada para a página Pokémon Favoritados, na URL /favorites ao clicar no link Favorite Pokémon', () => {
    const { getByText } = renderWithRouter(<App />);
    const homeLink = getByText(/Favorite Pokémon/);
    userEvent.click(homeLink);
    const { history } = renderWithRouter(<App />);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  it('A aplicação é redirecionada para a página Not Found, na URL desconhecida', () => {
    const { getByText, history } = renderWithRouter(<App />);
    act(() => history.push('zombies-ate-my-neighbors'));
    // const { pathname } = history.location;
    const notFound = getByText(/Page requested not found/);
    expect(notFound).toBeInTheDocument();
  });
});
