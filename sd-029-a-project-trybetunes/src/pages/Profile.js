import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from '../components/Loading';
import Header from '../components/Header';
import perfil from '../components/images/perfil.svg';
import '../components/styles/profile.css';

class Profile extends React.Component {
  state = { user: {}, loading: false };

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    this.setState({ loading: true }, async () => {
      const user = await getUser();
      if (user.image === '') {
        user.image = perfil;
      }
      this.setState({ user, loading: false });
    });
  };

  render() {
    const { loading, user } = this.state;
    return (
      <>
        <Header />
        <div data-testid="page-profile">

          {loading ? <Loading /> : (
            <>
              <img
                src={ user?.image }
                alt={ user?.name }
                data-testid="profile-image"
                height="240px"
              />
              <div className="profile-infos">
                <p className="profile-title">Nome</p>
                <p className="profile-data">{user?.name}</p>
                <p className="profile-title">E-mail</p>
                <p className="profile-data">{user?.email}</p>
                <p className="profile-title">Descrição</p>
                <p className="profile-data">{user?.description}</p>
                <button>
                  <Link to="/profile/edit">Editar perfil</Link>
                </button>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

export default Profile;
