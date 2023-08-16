import { act, screen, waitFor } from "@testing-library/react";
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe('Testando tela Game', () => {
  it('Teste os caminho Novo Jogo na tela Game', async () => {
    // const token = 'f1862a7bbee2101727e5ee33915fb53b87798aa379763639f542bd8f65898fc1';
    const result = {
      "response_code": 0,
      "results": [
        {
          "category": "Entertainment: Video Games",
          "type": "boolean",
          "difficulty": "easy",
          "question": "In &quot;Super Mario 64&quot;, collecting 100 coins on a level will give you a 1-UP.",
          "correct_answer": "False",
          "incorrect_answers": [
            "True"
          ]
        },
        {
          "category": "Animals",
          "type": "multiple",
          "difficulty": "medium",
          "question": "For what reason would a spotted hyena &quot;laugh&quot;?",
          "correct_answer": "Nervousness",
          "incorrect_answers": [
            "Excitement",
            "Aggression",
            "Exhaustion"
          ]
        },
        {
          "category": "Vehicles",
          "type": "multiple",
          "difficulty": "hard",
          "question": "Which one of these chassis codes are used by BMW 3-series?",
          "correct_answer": "E46",
          "incorrect_answers": [
            "E39",
            "E85",
            "F10"
          ]
        },
        {
          "category": "Entertainment: Film",
          "type": "multiple",
          "difficulty": "medium",
          "question": "Who played the Cenobite called &quot;Pinhead&quot; in the original Hellraiser films?",
          "correct_answer": "Doug Bradley",
          "incorrect_answers": [
            "Doug Jones",
            "Doug Savant",
            "Doug Benson"
          ]
        },
        {
          "category": "Animals",
          "type": "boolean",
          "difficulty": "easy",
          "question": "Rabbits can see what&#039;s behind themselves without turning their heads.",
          "correct_answer": "True",
          "incorrect_answers": [
            "False"
          ]
        }
      ]
    };
  
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(result),
    });
    const { history } = renderWithRouterAndRedux(<App />)
    const nameEl = screen.getByTestId('input-player-name');
    const emailEl = screen.getByTestId('input-gravatar-email');
    const playBtn = screen.getByRole('button', { name: /play/i });
    expect(playBtn).toBeDisabled();

    userEvent.type(nameEl, 'teste');
    userEvent.type(emailEl, 'teste@teste.com');
    expect(playBtn).toBeEnabled();

    userEvent.click(playBtn);
    await waitFor(() => {
        expect(history.location.pathname).toBe('/game')
        const newGameBtn = screen.getByRole('button', { name: /novo jogo/i });
        userEvent.click(newGameBtn);
    });    
 
  });
});
