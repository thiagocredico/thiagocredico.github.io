import React from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import '../components/styles/favorites.css';

class Favorites extends React.Component {
  state = { savedSongs: [], loading: true, isFavorite: true };

  componentDidMount() {
    this.getFavoriteSongs();
    this.setState({ loading: false });
  }

  getFavoriteSongs = async () => {
    const savedSongs = await getFavoriteSongs();
    this.setState({ savedSongs });
  };

  removeSavedSong = (trackId) => {
    this.setState((prevState) => ({
      savedSongs: prevState.savedSongs.filter((track) => track.trackId !== trackId),
    }));
  };

  render() {
    const { savedSongs, isFavorite, loading } = this.state;
    return (
      <>
        <Header />
        <div className="header-favorites">
          <div data-testid="page-favorites">
            Músicas Favoritas
          </div>
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

          {
            loading
              ? <Loading />
              : (
                <div className="saved-list">
                  {savedSongs.map((track, index) => (
                    <MusicCard
                      key={ index }
                      artistName={ track.artistName }
                      trackName={ track.trackName }
                      previewUrl={ track.previewUrl }
                      trackId={ track.trackId }
                      track={ track }
                      isFavorite={ isFavorite }
                      removeSavedSong={ this.removeSavedSong }
                    />
                  ))}
                </div>
              )
          }
        </div>
      </>
    );
  }
}

export default Favorites;
