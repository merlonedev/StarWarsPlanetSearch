import React, { useContext } from 'react';
import myContext from '../context/myContext';

function RenderPlanets() {
  const { filteredPlanets } = useContext(myContext);

  return (
    Object.values(filteredPlanets).map((planetas, index) => (
      <tr key={ index }>
        <td data-testid="planet-name">{planetas.name}</td>
        <td>{planetas.rotation_period}</td>
        <td>{planetas.orbital_period}</td>
        <td>{planetas.diameter}</td>
        <td>{planetas.climate}</td>
        <td>{planetas.gravity}</td>
        <td>{planetas.terrain}</td>
        <td>{planetas.surface_water}</td>
        <td>{planetas.population}</td>
      </tr>
    )));
}

export default RenderPlanets;
