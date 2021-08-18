import React, { useContext } from 'react';
import context from '../context';

import Planet from './Planet';
import defaultHeaders from '../helpers/defaultHeaders';

function Table() {
  const {
    data: { planets },
    filters: {
      filterByName: { name },
      filterByNumericValues: {
        column,
        comparison,
        value,
      },
    },
  } = useContext(context);

  const doesInclude = (planetName) => planetName.toLowerCase()
    .includes(name.toLowerCase());

  const compareValue = (planetValue) => {
    switch (comparison) {
    case 'bigger':
      return planetValue > value;
    case 'smaller':
      return planetValue < value;
    case 'equal':
      return planetValue === value;
    default:
      return true;
    }
  };

  const filteredPlanets = () => {
    const filterByName = planets.length > 0
      ? planets.filter((planet) => doesInclude(planet.name))
      : [];

    const filterByValues = filterByName.filter((planet) => {
      const planetColumnValue = parseInt(planet[column], 10);
      const bool = compareValue(planetColumnValue);
      return bool;
    });
    return filterByValues;
  };
  return (
    <table>
      <thead>
        <tr>
          { defaultHeaders.map((item, index) => <th key={ index }>{ item }</th>)}
        </tr>
      </thead>
      <tbody>
        { filteredPlanets().map((planet, index) => (
          <Planet planet={ planet } key={ index } />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
