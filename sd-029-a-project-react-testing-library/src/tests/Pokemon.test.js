import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  it('Teste se é renderizado um card com as informações de determinado Pokémon:', () => {
    const { getByRole, getByTestId, getByText } = renderWithRouter(<App />);
    const pikachu = getByText(/Pikachu/);
    const type = getByTestId('pokemon-type');
    const weight = getByText(/Average weight: 6.0 kg/);
    const img = getByRole('img', { name: /Pikachu sprite/ });

    expect(pikachu).toHaveTextContent('Pikachu');
    expect(type).toHaveTextContent('Electric');
    expect(weight).toHaveTextContent('6.0 kg');
    expect(img.src).toBe('https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
    expect(img.alt).toBe('Pikachu sprite');
  });

  it('O card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon'
  + 'Ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon'
  + 'A URL exibida no navegador muda para `/pokemon/<id>`'
  + 'Existe um ícone de estrela nos Pokémon favoritados', () => {
    const { getByRole, getByText, history } = renderWithRouter(<App />);
    const details = getByRole('link', { name: /More details/ });
    expect(details.href).toContain('/pokemon/25');
    userEvent.click(details);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemon/25');
    const favoriteCheck = getByRole('checkbox', { name: /Pokémon favoritado/ });
    userEvent.click(favoriteCheck);
    const favoriteIcon = getByRole('img', { name: /Pikachu is marked as favorite/ });
    expect(favoriteIcon.src).toContain('/star-icon.svg');
    expect(favoriteIcon).toBeInTheDocument();
    const electric = getByText(/Electric/);
    expect(electric).toBeInTheDocument();
  });
});
