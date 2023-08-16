import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import '../components/styles/album.css';

class Album extends React.Component {
  state = {
    album: [],
    artistName: '',
    collectionName: '',
    artworkUrl100: '',
    favoriteMusic: [],
  };

  componentDidMount() {
    this.fetchMusic();
    this.getFavoriteSongs();
  }

  getFavoriteSongs = async () => {
    const savedFavorites = await getFavoriteSongs();
    const { album } = this.state;
    const favoriteMusic = album.map((track) => {
      const isFavorite = savedFavorites
        .some((savedFavorite) => savedFavorite.trackId === track.trackId);
      return { ...track, isFavorite };
    });
    this.setState({ favoriteMusic });
  };

  fetchMusic = async () => {
    const { match: { params: { id } } } = this.props;
    const musics = await getMusics(id);
    const album = musics.filter((_album, index) => index !== 0);
    const { artistName, collectionName, artworkUrl100 } = musics[0];
    this.setState({
      album,
      artistName,
      collectionName,
      artworkUrl100 });
  };

  render() {
    const { favoriteMusic, artistName, collectionName, artworkUrl100 } = this.state;
    const artworkUrl1200 = artworkUrl100?.replace(/100x100/g, '1200x1200') || '';
    return (
      <>
        <Header />
        <div data-testid="page-album">
          <div className="title">
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
            <img
              data-testid="album-image"
              src={ artworkUrl1200 }
              alt={ collectionName }
            />
            <div className="albumInfos">
              <div data-testid="album-name">{ collectionName }</div>
              <div data-testid="artist-name">{ artistName }</div>
            </div>
          </div>

          <div className="musicList">
            {
              favoriteMusic.map((track, index) => (
                <MusicCard
                  key={ index }
                  artistName={ track.artistName }
                  trackName={ track.trackName }
                  previewUrl={ track.previewUrl }
                  trackId={ track.trackId }
                  track={ track }
                  isFavorite={ track.isFavorite }
                  removeSavedSong={ () => {} }
                />
              ))
            }
          </div>
        </div>
      </>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Album;
