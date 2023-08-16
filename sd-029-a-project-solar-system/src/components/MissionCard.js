import React from 'react';
import PropTypes from 'prop-types';
import Calendar from '../images/Calendar.svg';
import Flag from '../images/Flag.svg';
import Pin from '../images/Pin.svg';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">{name}</p>
        <p data-testid="mission-year">
          <img src={ Calendar } alt="calendar" />
          {year}
        </p>
        <p data-testid="mission-country">
          <img src={ Pin } alt="pin" />
          {country}
        </p>
        <p data-testid="mission-destination">
          <img src={ Flag } alt="flag" />
          {destination}
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  country: PropTypes.string,
  destination: PropTypes.string,
}.isRequired;

export default MissionCard;
