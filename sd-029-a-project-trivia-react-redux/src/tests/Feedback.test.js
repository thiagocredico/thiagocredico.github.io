import { act, screen, waitFor } from "@testing-library/react";
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe('Testando tela de Feedback', () => {
  it('Teste os compenentes de feedback', async () => {
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
    jest.useFakeTimers();

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

    const categoryEl = screen.findByTestId('question-category');
    expect((await categoryEl).innerHTML).toBe('Entertainment: Video Games')

    const questionEl = screen.findByTestId('question-text');
    expect((await questionEl).innerHTML).toContain('collecting 100 coins on a level will give you a 1-UP.')
    
    for (let i = 0; i < 31; i += 1) {
      act(() => {
        jest.advanceTimersByTime(1000);
      });
    }

    // const incorrectBtn = screen.getByRole('button', { name: /true/i });
    // expect(incorrectBtn).toBeInTheDocument();
    
    // userEvent.click(incorrectBtn);

    const nextBtn = screen.getByRole('button', { name: /pŕoxima pergunta/i });
    userEvent.click(nextBtn);

    const categoryEl2 = screen.findByTestId('question-category');
    expect((await categoryEl2).innerHTML).toBe('Animals');

    const incorrectBtn2 = screen.getByRole('button', { name: /Excitement/i });
    userEvent.click(incorrectBtn2);
    const nextBtn2 = screen.getByRole('button', { name: /pŕoxima pergunta/i });
    userEvent.click(nextBtn2);

    const incorrectBtn3 = screen.getByRole('button', { name: /E85/i });
    userEvent.click(incorrectBtn3);
    const nextBtn3 = screen.getByRole('button', { name: /pŕoxima pergunta/i });
    userEvent.click(nextBtn3);

    const incorrectBtn4 = screen.getByRole('button', { name: /Doug Jones/i });
    userEvent.click(incorrectBtn4);
    const nextBtn4 = screen.getByRole('button', { name: /pŕoxima pergunta/i });
    userEvent.click(nextBtn4);

    const incorrectBtn5 = screen.getByRole('button', { name: /False/i });
    userEvent.click(incorrectBtn5);
    const nextBtn5 = screen.getByRole('button', { name: /pŕoxima pergunta/i });
    userEvent.click(nextBtn5);

    const feddbackEl = screen.getByText(/could be better\.\.\./i);
    expect(feddbackEl).toBeInTheDocument();

    const rankingBtn = screen.getByRole('button', { name: /ranking/i });
    userEvent.click(rankingBtn);

    const scoreEl = screen.getByText(/0/i);
    expect(scoreEl).toBeInTheDocument();

    const newGameBtn = screen.getByRole('button', { name: /novo jogo/i });
    userEvent.click(newGameBtn);

    const settingsBtn = screen.getByRole('button', { name: /configurações/i });
    expect(settingsBtn).toBeInTheDocument();

    history.push('/feedback');
    
    await waitFor(() => {
      const newGameBtn2 = screen.getByRole('button', { name: /novo jogo/i });
      userEvent.click(newGameBtn2);
      const settingsBtn2 = screen.getByRole('button', {  name: /configurações/i})
      expect(settingsBtn2).toBeInTheDocument();
    });

    history.push('/');

    const nameEl2 = screen.getByTestId('input-player-name');
    const emailEl2 = screen.getByTestId('input-gravatar-email');
    const playBtn2 = screen.getByRole('button', { name: /play/i });
    expect(playBtn2).toBeDisabled();

    userEvent.type(nameEl2, 'teste2');
    userEvent.type(emailEl2, 'teste2@teste.com');
    expect(playBtn2).toBeEnabled();

    await waitFor(() => {
      userEvent.click(playBtn2);
      expect(history.location.pathname).toBe('/game')
    });

    const categoryEl3 = screen.findByTestId('question-category');
    expect((await categoryEl3).innerHTML).toBe('Entertainment: Video Games')

    const questionEl3 = screen.findByTestId('question-text');
    expect((await questionEl3).innerHTML).toContain('collecting 100 coins on a level will give you a 1-UP.')
    
    const correctBtn = screen.getByRole('button', { name: /false/i });
    expect(correctBtn).toBeInTheDocument();
    
    userEvent.click(correctBtn);

    const newNextBtn = screen.getByRole('button', { name: /pŕoxima pergunta/i });
    userEvent.click(newNextBtn);

    const correctBtn2 = screen.getByRole('button', { name: /Nervousness/i });
    userEvent.click(correctBtn2);
    const newNextBtn2 = screen.getByRole('button', { name: /pŕoxima pergunta/i });
    userEvent.click(newNextBtn2);

    const correctBtn3 = screen.getByRole('button', { name: /E46/i });
    userEvent.click(correctBtn3);
    const newNextBtn3 = screen.getByRole('button', { name: /pŕoxima pergunta/i });
    userEvent.click(newNextBtn3);

    const correctBtn4 = screen.getByRole('button', { name: /Doug Bradley/i });
    userEvent.click(correctBtn4);
    const newNextBtn4 = screen.getByRole('button', { name: /pŕoxima pergunta/i });
    userEvent.click(newNextBtn4);

    const correctBtn5 = screen.getByRole('button', { name: /true/i });
    userEvent.click(correctBtn5);
    const newNextBtn5 = screen.getByRole('button', { name: /pŕoxima pergunta/i });
    userEvent.click(newNextBtn5);

    const feddbackEl2 = screen.getByText(/Well Done/i);
    expect(feddbackEl2).toBeInTheDocument();

    const rankingBtn2 = screen.getByRole('button', { name: /ranking/i });
    userEvent.click(rankingBtn2);

    const player2 = screen.getByText(/teste2/i);
    expect(player2).toBeInTheDocument(); 

    await waitFor(() => {
      const newGameBtn2 = screen.getByRole('button', { name: /novo jogo/i });
      userEvent.click(newGameBtn2);
      const settingsBtn2 = screen.getByRole('button', {  name: /configurações/i})
      expect(settingsBtn2).toBeInTheDocument();
    });

  });
});
