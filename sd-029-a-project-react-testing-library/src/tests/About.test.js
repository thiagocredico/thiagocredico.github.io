import React from 'react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('Teste o componente <About.js />', () => {
  it('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    const { getByRole } = renderWithRouter(<About />);
    const textH2 = getByRole('heading', {
      name: 'About Pokédex',
      level: 2,
    });
    expect(textH2).toBeInTheDocument();
  });

  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    const { getByText } = renderWithRouter(<About />);
    const p1 = getByText(/This application simulates a Pokédex, a digital encyclopedia containing all Pokémon/);
    const p2 = getByText(/One can filter Pokémon by type, and see more details for each one of them/);
    expect(p1).toBeInTheDocument();
    expect(p2).toBeInTheDocument();
  });

  it('Teste se a página contém a seguinte imagem de uma Pokédex.', () => {
    const { getByRole } = renderWithRouter(<About />);
    const pokedexImg = getByRole('img');
    expect(pokedexImg).toBeInTheDocument();
    expect(pokedexImg.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
