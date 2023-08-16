import { Redirect } from 'react-router-dom';
import React from 'react';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';
import logo from '../components/images/logo.svg';
import '../components/styles/login.css';

class Login extends React.Component {
  state = { name: '', loading: false, logged: false };

  onChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  validateButton = () => {
    const { name } = this.state;
    const minCharNumber = 3;
    const disable = name.length >= minCharNumber;
    return !disable;
  };

  createUser = async (user) => {
    this.setState({ loading: true });
    await createUser(user);
    this.setState({ loading: false, logged: true });
  };

  render() {
    const { name, loading, logged } = this.state;
    const user = { name };
    return (
      <div data-testid="page-login">
        {/* Login */}
        <div className="cyanoBars">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
        <div className="blueBars">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
        <form>
          <img src={ logo } alt="logo" />
          <label htmlFor="name">
            {/* Nome */}
            <input
              id="name"
              name="name"
              value={ name }
              type="text"
              data-testid="login-name-input"
              onChange={ this.onChange }
              placeholder="qual é o seu nome?"
            />
          </label>
          <button
            type="button"
            disabled={ this.validateButton() }
            data-testid="login-submit-button"
            onClick={ () => this.createUser(user) }
          >
            Entrar
          </button>
          {loading && <Loading />}
          {logged && <Redirect to="/search" /> }
        </form>
      </div>
    );
  }
}

export default Login;
