import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

const ROUTE = '/pokemon/25';

describe('Teste o componente <PokemonDetails.js />', () => {
  it('Teste se as informações detalhadas do Pokémon selecionado são mostradas na tela', () => {
    const { getByRole, getByText, history } = renderWithRouter(<App />);

    const details = getByRole('link', { name: /More details/ });
    expect(details.href).toContain(ROUTE);

    userEvent.click(details);
    const { pathname } = history.location;
    expect(pathname).toBe(ROUTE);

    const pikachuDetails = getByRole('heading', { name: /Pikachu Details/ });
    const summary = getByRole('heading', { name: /Summary/ });
    const summaryP = getByText(/This intelligent Pokémon roasts hard berries with electricity to make them/);

    expect(details).not.toBeInTheDocument();
    expect(pikachuDetails).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(summaryP).toBeInTheDocument();
  });

  it('Teste se existe na página uma seção com os mapas contendo as localizações do Pokémon', () => {
    const { getByRole, getAllByAltText, getByText, history } = renderWithRouter(<App />);

    const details = getByRole('link', { name: /More details/ });
    expect(details.href).toContain(ROUTE);

    userEvent.click(details);
    const { pathname } = history.location;
    expect(pathname).toBe(ROUTE);

    const gameLocations = getByRole('heading', { name: /Game Locations of Pikachu/ });
    const pikachuLocation = getAllByAltText(/Pikachu location/);
    const forestMap = getByText(/Kanto Viridian Forest/);
    const plantMap = getByText(/Kanto Power Plant/);

    expect(gameLocations).toBeInTheDocument();
    expect(pikachuLocation).toHaveLength(2);
    expect(forestMap).toBeInTheDocument();
    expect(plantMap).toBeInTheDocument();
    expect(pikachuLocation[0]).toHaveAttribute('alt', 'Pikachu location');
    expect(pikachuLocation[1]).toHaveAttribute('alt', 'Pikachu location');
    expect(pikachuLocation[0]).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');
    expect(pikachuLocation[1]).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  it('Teste se o usuário pode favoritar um Pokémon através da página de detalhes', () => {
    const { getByRole, getByText, history } = renderWithRouter(<App />);

    const details = getByRole('link', { name: /More details/ });
    expect(details.href).toContain(ROUTE);
    userEvent.click(details);
    const { pathname } = history.location;
    expect(pathname).toBe(ROUTE);

    const favoriteCheck = getByRole('checkbox', { name: /Pokémon favoritado/ });
    const label = getByText(/Pokémon favoritado/);
    expect(label.innerHTML).toContain('Pokémon favoritado?');

    userEvent.click(label);
    expect(favoriteCheck.checked).toEqual(true);

    userEvent.click(favoriteCheck);
    expect(favoriteCheck.checked).toEqual(false);
  });
});
