import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const planetsList = planets.map((planet) => (<PlanetCard
      key={ planet.name }
      planetName={ planet.name }
      planetImage={ planet.image }
    />));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { planetsList }
      </div>
    );
  }
}

export default SolarSystem;
