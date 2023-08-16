import React, { Component } from 'react';
import Card from '../components/Card';
import Menu from '../components/Menu';
import { fetchPhotos } from '../services/photoAPI';

class Home extends Component {
  state = {
    searchTerm: '',
    isLoading: false,
    photos: [],
    showSearchTermWarning: false,
  };

  componentDidMount() {
    this.requestPhotos('praia');
  }

  requestPhotos = async (searchInput) => {
    const photos = await fetchPhotos(searchInput);
    this.setState({
      photos,
      isLoading: false,
    });
  };

  handleChange = (event) => {
    const { target } = event;

    this.setState({
      [target.name]: target.value,
    });
  };

  handleClick = async () => {
    const { searchTerm } = this.state;

    if (searchTerm !== '') {
      this.setState({
        isLoading: true,
        showSearchTermWarning: false,
      });
      this.requestPhotos(searchTerm);
      return;
    }
    this.setState({
      showSearchTermWarning: true,
    });
  };

  render() {
    const { searchTerm, isLoading, photos, showSearchTermWarning } = this.state;

    return (
      <div>
        <Menu />

        <div className="field has-addons is-flex is-justify-content-center mt-4">
          <div className="control">
            <input
              className="input"
              name="searchTerm"
              type="text"
              placeholder="Praia"
              value={ searchTerm }
              onChange={ this.handleChange }
            />
          </div>
          <div className="control">
            <button
              className={ `button is-info ${isLoading && 'is-loading'}` }
              onClick={ this.handleClick }
            >
              Buscar
            </button>
          </div>

        </div>

        {
          showSearchTermWarning && (
            <p
              className="help is-danger is-flex is-justify-content-center mt-4"
            >
              Campo de busca deve conter um termo!
            </p>
          )
        }
        <div className="is-flex is-justify-content-space-evenly is-flex-wrap-wrap">
          {
            // photos.map((photo) => {
            //   return (
            //     <Card
            //       key={photo.id}
            //       image={photo.urls.small}
            //       authorName={photo.user.name}
            //       authorBio={photo.user.bio}
            //     />
            //   )
            // })
            photos.map((photo) => (
              <Card
                key={ photo.id }
                image={ photo.urls.small }
                authorName={ photo.user.name }
                authorBio={ photo.user.bio }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Home;
