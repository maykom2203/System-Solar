import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../App.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="blocoPlaneta">
          {planets.map((planeta) => (<PlanetCard
            key={ planeta }
            planetName={ planeta.name }
            planetImage={ planeta.image }
          />))}

        </div>

      </div>

    );
  }
}

export default SolarSystem;
