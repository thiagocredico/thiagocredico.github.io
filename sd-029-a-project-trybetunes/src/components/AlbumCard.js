import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class AlbumCard extends React.Component {
  render() {
    const { image, albumName, artistName, collectionId } = this.props;
    return (
      <div data-testid="albumCard">
        <Link
          to={ `album/${collectionId}` }
          data-testid={ `link-to-album-${collectionId}` }
        >
          <img
            data-testid="albumImage"
            src={ image }
            alt={ albumName }
          />
          {/* Mais */}
          <p data-testid="albumName">{ albumName }</p>
          <p data-testid="artistName">{ artistName }</p>
          {/* <Link
          to={ `album/${collectionId}` }
          data-testid={ `link-to-album-${collectionId}` }
          >
          Mais
        </Link> */}
        </Link>
      </div>
    );
  }
}

AlbumCard.propTypes = {
  image: PropTypes.string,
  albumName: PropTypes.string,
  artistName: PropTypes.string,
  collectionId: PropTypes.number,
}.isRequired;

export default AlbumCard;
