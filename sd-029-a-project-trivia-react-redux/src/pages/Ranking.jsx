import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Ranking extends Component {
  state = {
    ranking: [],
  };

  componentDidMount() {
    const ranking = JSON.parse(localStorage.getItem('ranking'))
      .sort((a, b) => b.score - a.score);
    this.setState({
      ranking,
    });
  }

  handleClickHome = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const { ranking } = this.state;

    return (
      <div>
        <title data-testid="ranking-title">Ranking</title>
        <p>Ranking</p>
        <div className="container-users-ranking">
          {
            ranking.map((user, index) => (
              <div
                key={ index }
                className="container-user"
              >
                <img
                  src={ user.photo }
                  alt="Imagem do participante"
                  className="img-user"
                />
                <div className="name-score-user">
                  <span data-testid={ `player-name-${index}` }>{user.name}</span>
                  <div className="score-user">
                    <span data-testid={ `player-score-${index}` }>{user.score}</span>
                    <span className="pts">pts</span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <button
          data-testid="btn-go-home"
          onClick={ this.handleClickHome }
        >
          Novo Jogo
        </button>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape(PropTypes.object.isRequired).isRequired,
};

export default connect()(Ranking);
