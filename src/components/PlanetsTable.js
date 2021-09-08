import React, { useState } from 'react';
import SearchByName from './SearchByName';
import useOrder from '../hooks/useOrder';
import usePlanets from '../hooks/usePlanets';

function PlanetsTable() {
  const [planets] = usePlanets();
  const [name, setName] = useState('');
  const { sortPlanets } = useOrder();

  const fillPlanets = () => (
    sortPlanets()
      .filter((planet) => planet.name.includes(name))
      .map((planet) => (
        <tr key={ planet.name } name={ planet.name }>
          <td data-testid="planet-name">{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.population}</td>
          <td>{planet.films}</td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>{planet.url}</td>
        </tr>
      ))
  );

  if (planets.length !== 0) {
    return (
      <>
        <SearchByName setName={ setName } name={ name } />
        <tbody>
          <tr>
            {Object.keys(planets[0]).filter((key) => key !== 'residents')
              .map((key) => (
                <th key={ key } name={ key }>{key}</th>
              ))}
          </tr>
          { fillPlanets() }
        </tbody>
      </>
    );
  }
  return (
    <div>...Loading</div>
  );
}

export default PlanetsTable;
