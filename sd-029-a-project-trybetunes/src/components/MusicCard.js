import React from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  state = {
    loading: false,
    favorite: false,
  };

  componentDidMount() {
    const { isFavorite } = this.props;
    this.setState({
      favorite: isFavorite,
    });
  }

  addSong = async () => {
    const { favorite } = this.state;
    const { track, trackId,
      removeSavedSong,
    } = this.props;
    this.setState({ loading: true });
    if (!favorite) {
      await addSong(track);
    } else {
      await removeSong(track);
      await removeSavedSong(trackId);
    }
    this.setState({ loading: false });
  };

  onChange = async ({ target }) => {
    const value = target.checked;
    this.setState(
      { favorite: value },
      await this.addSong(),
    );
  };

  render() {
    const { trackName, previewUrl, trackId } = this.props;
    const { loading, favorite } = this.state;
    return (
      <div className="track">
        <p>{ trackName }</p>
        <audio
          data-testid="audio-component"
          src={ previewUrl }
          controls
        >
          <track
            kind="captions"
          />
          {'O seu navegador não suporta o elemento {" "} '}
          <code> audio </code>
        </audio>
        <label>
          <input
            name="favorite"
            id="favorite"
            type="checkbox"
            onChange={ this.onChange }
            checked={ favorite }
            data-testid={ `checkbox-music-${trackId}` }
          />
          Favorita

        </label>
        { loading && <Loading />}
        <br />
        <div className="bar" />
      </div>
    );
  }
}

MusicCard.propTypes = {
  isFavorite: PropTypes.bool,
  artistName: PropTypes.string,
  trackName: PropTypes.string,
  previewUrl: PropTypes.string,
  trackId: PropTypes.number,
  track: PropTypes.shape({}).isRequired,
}.isRequired;

export default MusicCard;
