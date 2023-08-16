import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const {
      image,
      authorName,
      authorBio,
    } = this.props;

    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={ image } alt="search result" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{authorName}</p>
            </div>
          </div>

          <div className="content">
            {authorBio}
          </div>
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  authorBio: 'n/a',
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  authorBio: PropTypes.string,
};
