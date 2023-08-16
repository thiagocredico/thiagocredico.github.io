import { screen, waitFor } from "@testing-library/react";
import App from "../App";
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";
import userEvent from "@testing-library/user-event";

describe('Testando tela de Login', () => {
  it('Verifica se ao carregar a pagina o botão "play" está desabilitado, e se ao preecher as informações de usuario corretamente fica habilitado.', async () => {
    const { history } = renderWithRouterAndRedux(<App />)
    const nameEl = screen.getByTestId('input-player-name');
    const emailEl = screen.getByTestId('input-gravatar-email');
    const playBtn = screen.getByRole('button', { name: /play/i });
    expect(playBtn).toBeDisabled();

    userEvent.type(nameEl, 'teste');
    userEvent.type(emailEl, 'teste@teste.com');
    expect(playBtn).toBeEnabled();

    await waitFor(() => {
      userEvent.click(playBtn);
      expect(history.location.pathname).toBe('/game')
    });
  });
  
  it('Testar se clickando em settings a pagina é redirecionada para o caminho "/settings"', () => {
    const { history } = renderWithRouterAndRedux(<App />)

    const configBtn = screen.getByRole('button', { name: /configurações/i });
    userEvent.click(configBtn);
    const { pathname } = history.location;
    expect(pathname).toBe('/settings');
  })
});
