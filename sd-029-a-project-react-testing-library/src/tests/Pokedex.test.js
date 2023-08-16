import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa os elementos do componente <Pokedex.js />', () => {
  it('Teste se a página contém um heading h2 com o texto Encountered Pokémon', () => {
    const { getByRole } = renderWithRouter(<App />);
    const title = getByRole('heading', {
      name: 'Encountered Pokémon',
      level: 2,
    });
    expect(title).toBeInTheDocument();
  });

  describe('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', () => {
    it('O botão deve conter o texto Próximo Pokémon', () => {
      const { getByRole } = renderWithRouter(<App />);
      const btnNextPokemon = getByRole('button', { name: /Próximo Pokémon/ });
      expect(btnNextPokemon).toBeInTheDocument();
    });

    it('Os próximos Pokémon da lista devem ser mostrados, um a um, ao clicar sucessivamente no botão'
    + 'O primeiro Pokémon da lista deve ser mostrado ao clicar no botão, se estiver no último Pokémon da lista', () => {
      const { getByRole, getByText } = renderWithRouter(<App />);
      const firstPokemon = getByText(/Pikachu/);
      expect(firstPokemon).toBeInTheDocument();
      const btnNextPokemon = getByRole('button', { name: /Próximo Pokémon/ });
      userEvent.click(btnNextPokemon);
      let nextPokemon = getByText(/Charmander/);
      expect(nextPokemon).toBeInTheDocument();
      userEvent.click(btnNextPokemon);
      nextPokemon = getByText(/Caterpie/);
      expect(nextPokemon).toBeInTheDocument();
      userEvent.click(btnNextPokemon);
      nextPokemon = getByText(/Ekans/);
      expect(nextPokemon).toBeInTheDocument();
      userEvent.click(btnNextPokemon);
      nextPokemon = getByText(/Alakazam/);
      expect(nextPokemon).toBeInTheDocument();
      userEvent.click(btnNextPokemon);
      nextPokemon = getByText(/Mew/);
      expect(nextPokemon).toBeInTheDocument();
      userEvent.click(btnNextPokemon);
      nextPokemon = getByText(/Rapidash/);
      expect(nextPokemon).toBeInTheDocument();
      userEvent.click(btnNextPokemon);
      nextPokemon = getByText(/Snorlax/);
      expect(nextPokemon).toBeInTheDocument();
      userEvent.click(btnNextPokemon);
      nextPokemon = getByText(/Dragonair/);
      expect(nextPokemon).toBeInTheDocument();
      userEvent.click(btnNextPokemon);
      nextPokemon = getByText(/Pikachu/);
      expect(nextPokemon).toBeInTheDocument();
      expect(nextPokemon).toBe(firstPokemon);
    });
  });
  it('teste se é mostrado apenas um Pokémon por vez;', () => {
    const { getByText, queryByText } = renderWithRouter(<App />);
    const pikachu = getByText(/Pikachu/);
    const rapidash = queryByText(/Rapidash/);
    const dragonair = queryByText(/Dragonair/);
    expect(pikachu).toBeInTheDocument();
    expect(rapidash).not.toBeInTheDocument();
    expect(dragonair).not.toBeInTheDocument();
  });

  describe('Teste se a Pokédex tem os botões de filtro', () => {
    it('Deve existir um botão de filtragem para cada tipo de Pokémon, sem repetição'
    + 'A partir da seleção de um botão de tipo, a Pokédex deve circular somente pelos Pokémon daquele tipo'
    + 'Teste se a Pokédex contém um botão para resetar o filtro', () => {
      const { getByRole, getAllByTestId, getByText } = renderWithRouter(<App />);

      const filter = getAllByTestId('pokemon-type-button');
      const all = getByRole('button', { name: /All/ });
      const electric = getByRole('button', { name: /Electric/ });
      const fire = getByRole('button', { name: /Fire/ });
      const bug = getByRole('button', { name: /Bug/ });
      const poison = getByRole('button', { name: /Poison/ });
      const psychic = getByRole('button', { name: /Psychic/ });
      const normal = getByRole('button', { name: /Normal/ });
      const dragon = getByRole('button', { name: /Dragon/ });

      userEvent.click(filter[0]);
      expect(electric).toBeInTheDocument();
      let pokemon = getByText(/Pikachu/);
      expect(pokemon).toBeInTheDocument();

      expect(fire).toBeInTheDocument();
      userEvent.click(filter[1]);
      pokemon = getByText(/Charmander/);
      expect(pokemon).toBeInTheDocument();

      expect(bug).toBeInTheDocument();
      userEvent.click(filter[2]);
      pokemon = getByText(/Caterpie/);
      expect(pokemon).toBeInTheDocument();

      expect(poison).toBeInTheDocument();
      userEvent.click(filter[3]);
      pokemon = getByText(/Ekans/);
      expect(pokemon).toBeInTheDocument();

      expect(psychic).toBeInTheDocument();
      userEvent.click(filter[4]);
      pokemon = getByText(/Alakazam/);
      expect(pokemon).toBeInTheDocument();

      expect(normal).toBeInTheDocument();
      userEvent.click(filter[5]);
      pokemon = getByText(/Snorlax/);
      expect(pokemon).toBeInTheDocument();

      expect(dragon).toBeInTheDocument();
      userEvent.click(filter[6]);
      pokemon = getByText(/Dragonair/);
      expect(pokemon).toBeInTheDocument();

      expect(all).toBeInTheDocument();
      userEvent.click(all);
      pokemon = getByText(/Pikachu/);
      expect(pokemon).toBeInTheDocument();
    });
  });
});
