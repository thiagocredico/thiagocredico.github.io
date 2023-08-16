import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchTriviaAPI from '../services/fetchTriviaAPI';
import { actionUser } from '../redux/actions';

class Login extends Component {
  state = {
    email: '',
    name: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleClick = async () => {
    const { history, dispatch } = this.props;
    const { email, name } = this.state;
    const { token } = await fetchTriviaAPI();
    console.log(token);
    localStorage.setItem('token', token);
    dispatch(actionUser({ email, name }));
    history.push('/game');
  };

  handleClickSettings = () => {
    const { history } = this.props;
    history.push('/settings');
  };

  render() {
    const { email, name } = this.state;
    return (
      <form>
        <input
          onChange={ this.handleChange }
          data-testid="input-player-name"
          type="text"
          name="name"
          placeholder="seu nome"
          value={ name }
        />
        <input
          onChange={ this.handleChange }
          data-testid="input-gravatar-email"
          type="email"
          name="email"
          placeholder="seunome@email.com"
          value={ email }
        />
        <button
          type="button"
          data-testid="btn-play"
          disabled={
            name.length < 1
            || !(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(email)
          }
          onClick={ this.handleClick }
        >
          Play
        </button>

        <button
          type="button"
          data-testid="btn-settings"
          onClick={ this.handleClickSettings }
        >
          Configurações
        </button>

      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape(PropTypes.object.isRequired).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
