import React from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import AlbumCard from '../components/AlbumCard';
import '../components/styles/search.css';

class Search extends React.Component {
  state = {
    name: '',
    loading: false,
    artist: '',
    albuns: [],
  };

  onChange = ({ target }) => {
    const { name, value } = target;
    this.setState(
      {
        [name]: value,
      },
    );
  };

  searchAlbumsAPI = async (name) => {
    this.setState({ loading: true, name: '' });
    const response = await searchAlbumsAPI(name);
    this.setState({ loading: false });
    if (response.length > 0) {
      this.setState({ artist: `Resultado de álbuns de: ${name.toUpperCase()}`,
        loading: false });
    } else {
      this.setState({ artist: 'Nenhum álbum foi encontrado', loading: false });
    }
    response.forEach((album) => {
      const upscaledImg = album.artworkUrl100?.replace(/100x100/, '1200x1200') || '';
      album.artworkUrl100 = upscaledImg;
    });
    this.setState({ albuns: response });
  };

  validateButton = () => {
    const { name } = this.state;
    const minCharNumber = 2;
    const disable = name.length >= minCharNumber;
    return !disable;
  };

  render() {
    const { name, loading, artist, albuns } = this.state;
    return (
      <>
        <Header />
        <div data-testid="page-search">
          {/* Search */}
          {
            loading ? <Loading />
              : (
                <form>
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
                  <label htmlFor="name">
                    {/* Nome do Artista ou Banda */}
                    <input
                      id="name"
                      name="name"
                      value={ name }
                      type="text"
                      data-testid="search-artist-input"
                      onChange={ this.onChange }
                      placeholder="DIGITE A SUA PESQUISA"
                    />
                  </label>
                  <button
                    type="button"
                    disabled={ this.validateButton() }
                    data-testid="search-artist-button"
                    onClick={ () => this.searchAlbumsAPI(name) }
                  >
                    PROCURAR
                  </button>
                  {loading && <Loading />}
                  <section>
                    <p className="search-result">{ artist }</p>
                    <section>
                      { albuns.map((album, index) => (
                        <AlbumCard
                          key={ index }
                          image={ album.artworkUrl100 }
                          albumName={ album.collectionName }
                          artistName={ album.artistName }
                          collectionId={ album.collectionId }
                        />
                      )) }
                    </section>
                  </section>
                </form>
              )
          }
        </div>
      </>
    );
  }
}

export default Search;
