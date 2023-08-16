import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser, updateUser } from '../services/userAPI';
import perfil from '../components/images/perfil.svg';
// import './styles/header.css';

class ProfileEdit extends React.Component {
  state = {
    iName: '',
    iEmail: '',
    iDescription: '',
    iImage: '',
    loading: false,
    buttonDisabled: true,
  };

  componentDidMount() {
    this.setState({ loading: false });
    this.getUser();
  }

  getUser = async () => {
    const user = await getUser();
    if (user.image === '') {
      user.image = perfil;
    }
    this.setState({
      iName: user.name,
      iEmail: user.email,
      iDescription: user.description,
      iImage: user.image,
      loading: false,
      buttonDisabled: false,
    });
  };

  onChange = ({ target }) => {
    const { value } = target;
    const stateName = target.name;
    this.setState({ [stateName]: value }, () => this.validateButton(this.state));
  };

  validateButton = (info) => {
    const { iDescription, iEmail, iImage, iName } = info;
    const validation = (!!iDescription
      && (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(iEmail) // Regex
      && !!iImage && !!iName);
    this.setState({ buttonDisabled: !validation });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { history } = this.props;
    const { iDescription, iEmail, iImage, iName } = this.state;
    const info = {
      description: iDescription,
      email: iEmail,
      image: iImage,
      name: iName,
    };
    updateUser(info);
    history.push('/profile');
  };

  render() {
    const { iDescription, iEmail, iImage, iName, loading, buttonDisabled } = this.state;
    return (
      <>
        <Header />
        <div data-testid="page-profile-edit">
          <img
            src={ iImage }
            alt={ `Foto de ${iName}` }
            data-testid="profile-image"
          />
          {loading ? <Loading /> : (
            <form onSubmit={ this.onSubmit }>
              <label>
                <input
                  data-testid="edit-input-image"
                  name="iImage"
                  type="text"
                  value={ iImage }
                  onChange={ this.onChange }
                  placeholder="Insira um link"
                />
              </label>
              <label className="profile-title">
                Nome
                <p className="sub-text">Fique à vontade para usar seu nome social</p>
                <input
                  data-testid="edit-input-name"
                  name="iName"
                  type="text"
                  value={ iName }
                  onChange={ this.onChange }
                  placeholder="Placeholder"
                />
              </label>
              <label className="profile-title">
                E-mail
                <p className="sub-text">Escolha um e-mail que consulte diariamente</p>
                <input
                  data-testid="edit-input-email"
                  name="iEmail"
                  type="text"
                  value={ iEmail }
                  onChange={ this.onChange }
                  placeholder="seu_nome@email.com.br"
                />
              </label>
              <label className="profile-title">
                Descrição
                <textarea
                  data-testid="edit-input-description"
                  name="iDescription"
                  type="text"
                  value={ iDescription }
                  onChange={ this.onChange }
                  placeholder="Sobre mim"
                />
              </label>
              <button
                data-testid="edit-button-save"
                type="submit"
                disabled={ buttonDisabled }
              >
                Salvar
              </button>
            </form>
          )}
        </div>

      </>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default ProfileEdit;
