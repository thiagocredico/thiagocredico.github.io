import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemon from '../pages/FavoritePokemon';

describe('Testa os elementos da componente FavoritePokemon', () => {
  it('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos', () => {
    const { getByText } = renderWithRouter(<FavoritePokemon />);
    const noFavorite = getByText(/No favorite Pokémon found/);
    expect(noFavorite).toBeInTheDocument();
  });

  it('Teste se apenas são exibidos os Pokémon favoritados', async () => {
    const { history, getByText, getByRole,
      findByLabelText, queryByText } = renderWithRouter(<App />);

    history.push('/pokemon/25');
    const favoriteCheck = await findByLabelText(/pokémon favoritado/i);
    userEvent.click(favoriteCheck);
    expect(favoriteCheck.checked).toBe(true);

    const favoriteIcon = getByRole('img', { name: /Pikachu is marked as favorite/ });
    expect(favoriteIcon).toBeInTheDocument();

    const toFavorite = getByText(/Favorite Pokémon/);
    userEvent.click(toFavorite);
    const favoritedPokemon = getByText(/Pikachu/);
    expect(favoritedPokemon).toBeInTheDocument();
    expect(queryByText('Charmander')).not.toBeInTheDocument();
    expect(queryByText('Mew')).not.toBeInTheDocument();
  });
});
