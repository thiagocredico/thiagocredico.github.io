import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import logo from './images/logo.svg';
import perfil from './images/perfil.svg';
import pesquisa from './images/pesquisa.svg';
import favoritas from './images/favoritas.svg';
import './styles/header.css';
// import './styles/profile.css';

class Header extends React.Component {
  state = {
    user: '',
    loading: false,
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    this.setState({ loading: true });
    const response = await getUser();
    // console.log(response);
    if (response.image === '') {
      response.image = perfil;
    }
    this.setState({ user: response, loading: false });
  };

  render() {
    const { user, loading } = this.state;
    return (
      <header data-testid="header-component">
        <img src={ logo } alt="logo" />
        <div className="links">
          <div className="search">
            <img className="icon" src={ pesquisa } alt="search" />
            <Link data-testid="link-to-search" to="/search">
              Pesquisa
            </Link>
          </div>
          <div className="fav">
            <img className="icon" src={ favoritas } alt="fav" />
            <Link data-testid="link-to-favorites" to="/favorites">
              Favoritas
            </Link>
          </div>
          <div className="profile">
            <img className="icon" src={ perfil } alt="profile" />
            <Link data-testid="link-to-profile" to="/profile">
              Perfil
            </Link>
          </div>
        </div>
        {loading ? <Loading /> : (
          <div className="user">
            <img className="photo" src={ user.image } alt="logo" width="18px" />
            <p data-testid="header-user-name">
              {user.name}
            </p>

          </div>
        )}
      </header>
    );
  }
}

export default Header;
