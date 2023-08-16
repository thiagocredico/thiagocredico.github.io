import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <header>
        <h2>{headline}</h2>
      </header>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string,
}.isRequired;

export default Title;
