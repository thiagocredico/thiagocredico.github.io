import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import getRequest from '../services/getRequest';
import '../App.css';
import { addScore, getRights } from '../redux/actions';

class Game extends Component {
  state = {
    questions: [],
    btnClicked: false,
    timer: 30,
    currentQuestionIndex: 0,
  };

  componentDidMount() {
    this.getResponseApi();
  }

  componentDidUpdate(oldState) {
    const { timer } = this.state;
    if (timer !== oldState.timer && oldState.timer !== 1) {
      this.setTimer();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  setTimer = () => {
    const { timer } = this.state;
    const ONE_SECOND = 1000;
    this.timeout = setTimeout(() => {
      this.setState((oldState) => ({
        timer: oldState.timer - 1,
      }));
      if (timer === 0) {
        this.setState({ btnClicked: true });
      }
    }, ONE_SECOND);
  };

  getResponseApi = async () => {
    const { history } = this.props;
    const token = localStorage.getItem('token');
    const result = await getRequest(token);
    if (result.response_code !== 0) {
      localStorage.removeItem('token');
      history.push('/');
      return;
    }
    const mappedResult = result.results.map((question) => {
      let incorrectAnswers = [];
      const correctAnswer = {
        text: question.correct_answer,
        testid: 'correct-answer',
        classStyle: 'correct-anw',
      };
      if (question.type === 'multiple') {
        incorrectAnswers = question.incorrect_answers
          .map((incorrectAnswer, index) => ({
            text: incorrectAnswer,
            testid: `wrong-answer-${index}`,
            classStyle: 'incorrect-anw',
          }));
      } else {
        incorrectAnswers = [
          {
            text: question.incorrect_answers[0],
            testid: 'wrong-answer-0',
            classStyle: 'incorrect-anw',
          },
        ];
      }

      const { category } = question;
      const text = question.question;
      const { difficulty } = question;
      const randomRate = 0.5;
      const allAnswers = [correctAnswer, ...incorrectAnswers];
      const randomAnswers = allAnswers.sort(() => Math.random() - randomRate);

      return {
        text,
        category,
        answers: randomAnswers,
        difficulty,
      };
    });

    this.setState({
      questions: mappedResult,
    });
  };

  handleClickRanking = () => {
    const { history } = this.props;
    history.push('/ranking');
  };

  handleClickPlayAgain = () => {
    const { history } = this.props;
    history.push('/');
  };

  answerClick = (testid) => {
    const { questions, currentQuestionIndex, timer } = this.state;
    const { dispatch } = this.props;

    if (testid === 'correct-answer') {
      const score = this
        .countScore(questions[currentQuestionIndex].difficulty, timer);
      dispatch(addScore(score));
      dispatch(getRights(1));
    } else { dispatch(getRights(0)); }
    this.setState({ btnClicked: true });
  };

  countScore = (difficulty, timer) => {
    const POINTS = 10;
    const level = {
      easy: 1,
      medium: 2,
      hard: 3,
    };
    return POINTS + (level[difficulty] * timer);
  };

  nxtClick = () => {
    const { currentQuestionIndex } = this.state;
    const { history } = this.props;
    const MAX_INDEX = 4;
    this.setState((oldState) => ({
      currentQuestionIndex: oldState.currentQuestionIndex + 1,
      btnClicked: false,
      timer: 30,
    }));
    if (currentQuestionIndex >= MAX_INDEX) {
      history.push('/feedback');
    }
  };

  render() {
    const {
      btnClicked,
      questions,
      timer,
      currentQuestionIndex } = this.state;

    return (
      <>
        <Header />
        {
          questions.length === 0
            ? <p>Carregando....</p>
            : (
              <>
                <h2>
                  Tempo:
                  {' '}
                  {timer}
                  {' '}
                  segundos
                </h2>
                <h3>Categoria</h3>
                <p
                  data-testid="question-category"
                >
                  {questions[currentQuestionIndex].category}
                </p>
                <h3>Pergunta:</h3>
                <p
                  data-testid="question-text"
                >
                  {questions[currentQuestionIndex].text}
                </p>
                <section data-testid="answer-options">
                  {
                    questions[currentQuestionIndex]
                      .answers.map(({ text, testid, classStyle }, index) => (
                        <button
                          key={ index }
                          data-testid={ testid }
                          onClick={ () => this.answerClick(testid) }
                          className={ btnClicked ? classStyle : '' }
                          disabled={ btnClicked }
                        >
                          {text}
                        </button>
                      ))
                  }
                </section>
                {
                  btnClicked
                && (
                  <button
                    data-testid="btn-next"
                    onClick={ this.nxtClick }
                  >
                    Pŕoxima Pergunta
                  </button>
                )
                }

                <button
                  onClick={ this.handleClickPlayAgain }
                  data-testid="btn-play-again"
                >
                  Novo jogo

                </button>

                <button
                  onClick={ this.handleClickRanking }
                  data-testid="btn-ranking"
                >
                  Ranking

                </button>

              </>
            )
        }
      </>
    );
  }
}

Game.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape(PropTypes.object.isRequired).isRequired,
};

export default connect()(Game);
