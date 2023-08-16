import { act, screen, waitFor } from "@testing-library/react";
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe('Testando tela de Login', () => {
  it('Testa se é feito "logout" quando o response_code é "3"', async () => {
    const result = {
      "response_code": 3,
    };
  
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(result),
    });

    // jest.spyOn(global, 'fetch').mockResolvedValue({
    //   json: async () => (result),
    // });

    // const intialentries = ['/game']

    const { history } = renderWithRouterAndRedux(<App />)
    
    const nameEl = screen.getByTestId('input-player-name');
    const emailEl = screen.getByTestId('input-gravatar-email');
    const playBtn = screen.getByRole('button', { name: /play/i });
    expect(playBtn).toBeDisabled();

    userEvent.type(nameEl, 'teste');
    userEvent.type(emailEl, 'teste@teste.com');
    expect(playBtn).toBeEnabled();

    act(() => {
      userEvent.click(playBtn);
    });
    const carregando = await screen.findByText(/carregando/i);

   await waitFor(() => {
    expect(history.location.pathname).toBe('/')
    });
  });
});
