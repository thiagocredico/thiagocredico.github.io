import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userEmail } from '../redux/actions';

const passLength = 6;

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  onChange = (event) => {
    const { target } = event;
    this.setState({ [target.name]: target.value });
  };

  onClick = (event) => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(userEmail(email));
    history.push('/carteira');
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          placeholder="alguem@alguem.com"
          value={ email }
          onChange={ this.onChange }
        />
        <input
          data-testid="password-input"
          type="text"
          name="password"
          placeholder="******"
          value={ password }
          onChange={ this.onChange }
        />
        <button
          type="submit"
          onClick={ this.onClick }
          disabled={
            password.length < passLength
            || !(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(email)
          }
        >
          Entrar
        </button>

      </>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default connect()(Login);
