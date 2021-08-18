import React, { useContext } from 'react';
import context from '../context';

import Planet from './Planet';
import defaultHeaders from '../helpers/defaultHeaders';

function Table() {
  const { planets, filters: { filterByName: { name } } } = useContext(context);
  const doesInclude = (planetName) => planetName.toLowerCase().includes(name.toLowerCase());
  const filteredPlanets = planets.length > 0
    ? planets.filter((planet) => doesInclude(planet.name))
    : [];
  return (
    <table>
      <thead>
        <tr>
          { defaultHeaders.map((item, index) => <th key={ index }>{ item }</th>)}
        </tr>
      </thead>
      <tbody>
        { filteredPlanets.map((planet, index) => (
          <Planet planet={ planet } key={ index } />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
