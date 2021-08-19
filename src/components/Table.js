import React, { useContext } from 'react';
import context from '../context';

import Planet from './Planet';
import defaultHeaders from '../helpers/defaultHeaders';

function Table() {
  const {
    data: { planets },
    filters: {
      filterByName: { name },
      filterByNumericValues,
    },
  } = useContext(context);
  const doesInclude = (planetName) => planetName.toLowerCase()
    .includes(name.toLowerCase());

  const compareValue = (planetValue, value, comparison) => {
    switch (comparison) {
    case 'maior que':
      return planetValue > value;
    case 'menor que':
      return planetValue < value;
    case 'igual a':
      return planetValue === value;
    default:
      console.log('sim');
      return true;
    }
  };

  const filteredPlanets = () => {
    const filterByName = planets.length > 0
      ? planets.filter((planet) => doesInclude(planet.name))
      : [];
    if (filterByNumericValues.length > 0) {
      const filterByValues = filterByNumericValues.reduce((acc, filter) => {
        const { column, value, comparison } = filter;
        const filteredList = acc.filter((planet) => {
          const planetColumnValue = parseInt(planet[column], 10);
          const bool = compareValue(planetColumnValue, value, comparison);
          return bool;
        });
        return filteredList;
      }, filterByName);
      return filterByValues;
    }
    return filterByName;
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
