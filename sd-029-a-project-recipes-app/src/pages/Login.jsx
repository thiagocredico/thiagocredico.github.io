import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../providers/LoginProvider';
import { FetchContext } from '../providers/FetchProvider';

const MAX_LENGTH = 6;

function Login() {
  const { email, setEmail, password, setPassword } = useContext(LoginContext);
  const { setHaveCategory } = useContext(FetchContext);

  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const isFormValid = emailRegex.test(email) && password.length > MAX_LENGTH;
  const history = useHistory();

  const handleClick = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/meals');
    setHaveCategory(false);
  };

  return (
    <main>
      <form>
        <input
          type="text"
          name=""
          id=""
          data-testid="email-input"
          placeholder="Coloque seu e-mail"
          onChange={ ({ target }) => setEmail(target.value) }
          value={ email }
        />
        <input
          type="password"
          name=""
          id=""
          data-testid="password-input"
          placeholder="Senha"
          onChange={ ({ target }) => setPassword(target.value) }
          value={ password }
        />
        <button
          data-testid="login-submit-btn"
          disabled={ !isFormValid }
          onClick={ handleClick }
        >
          Entrar
        </button>
      </form>
    </main>
  );
}

export default Login;
