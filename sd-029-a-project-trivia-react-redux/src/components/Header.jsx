import md5 from 'crypto-js/md5';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  state = {
    photo: '',
    name: '',
  };

  componentDidMount() {
    const { name, email } = this.props;
    const hash = md5(email).toString();
    const photo = `https://www.gravatar.com/avatar/${hash}`;
    this.setState({
      photo,
      name,
    });
  }

  render() {
    const { photo, name } = this.state;
    const { score } = this.props;

    return (
      <header>
        <img data-testid="header-profile-picture" src={ photo } alt={ name } />
        <p data-testid="header-player-name">{ name }</p>
        <p data-testid="header-score">{ score }</p>
      </header>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = ({ player }) => ({
  ...player,
});

export default connect(mapStateToProps)(Header);
