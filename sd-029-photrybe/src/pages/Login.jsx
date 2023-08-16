import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { requestLogin } from '../services/loginAPI';

const UNAUTHORIZED_ERROR = 401;
const PASSWORD_MIN_LENGTH = 6;

class Login extends Component {
  state = {
    email: '',
    password: '',
    isLoginFailed: false,
    isLoading: false,
  };

  // handleChange genérico
  handleChange = (event) => {
    const { target } = event;
    // console.log(target.name);
    // const meuObj = {};
    // meuObj.teste = '123';
    // meuObj['chaveDeString'] = 123;
    // meuObj[target.name] = 123;
    // console.log(meuObj);

    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { history } = this.props;

    this.setState({
      isLoading: true,
    });
    const response = await requestLogin(email, password);
    // se a resposta for um erro 401
    if (response.status === UNAUTHORIZED_ERROR) {
      // exibir a mensagem: "Usuário ou senha incorretos"
      this.setState({
        isLoginFailed: true,
        isLoading: false,
      });
      return;
    }

    const data = await response.json();
    if (data.isAdmin) {
      console.log('esse usuário é um admin');
      history.push('/admin');
    } else {
      console.log('este é um usuário comum');
      history.push('/home');
    }
  };

  render() {
    const { email, password, isLoginFailed, isLoading } = this.state;

    // Estado derivado
    const isEmailValid = email.includes('@') && email.toLowerCase().includes('.com');
    const isPasswordValid = password.length >= PASSWORD_MIN_LENGTH;

    return (
      <div className="login-form-container">
        <form className="form login-form box" onSubmit={ this.handleSubmit }>

          <h4
            className="heading login-form-container-title"
          >
            Boas vindas ao Photrybe! 📸
          </h4>
          {
            isLoginFailed && (
              <div className="notification is-danger">
                Email ou senha incorretos!
              </div>
            )
          }
          <div className="field control has-icons-left">
            <input
              className="input is-medium"
              type="text"
              name="email"
              id="email"
              placeholder="Digite seu email"
              onChange={ this.handleChange }
              value={ email }
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
            {
              !isEmailValid
              && <p className="help is-danger">Email deve estar no formato correto</p>
            }
          </div>

          <div className="field control has-icons-left">
            <input
              className="input is-medium"
              type="password"
              name="password"
              id="password"
              placeholder="Digite sua senha"
              onChange={ this.handleChange }
              value={ password }
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock" />
            </span>
            {
              !isPasswordValid
              && <p className="help is-danger">Senha deve ter no mínimo 6 caracteres</p>
            }
          </div>

          <div className="field is-grouped is-grouped-right">
            <p className="control">
              <button
                className={ `button is-primary ${isLoading ? 'is-loading' : ''}` }
                disabled={ !isEmailValid || !isPasswordValid }
              >
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
