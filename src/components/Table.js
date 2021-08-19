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
      order,
    },
  } = useContext(context);

  const compareValue = (planetValue, value, comparison) => {
    switch (comparison) {
    case 'maior que':
      return planetValue > value;
    case 'menor que':
      return planetValue < value;
    case 'igual a':
      return planetValue === value;
    default:
      return true;
    }
  };

  const doesInclude = (planetName) => planetName.toLowerCase()
    .includes(name.toLowerCase());

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
  const isUnknown = (sort) => (sort === 'ASC' ? POSITIVE_NUMBER : NEGATIVE_NUMBER);
  const sortPlanets = () => {
    const POSITIVE_NUMBER = 1;
    const NEGATIVE_NUMBER = -1;
    const { column, sort } = order;
    const newSortedPlanets = filteredPlanets().sort((a, b) => {
      const aValue = a[column];
      const bValue = b[column];
      if (aValue === 'unknown' || bValue === 'unknown') {
        return isUnknown(sort);
      }
      const isNumber = !Number.isNaN((parseFloat(aValue)))
       && !Number.isNaN((parseFloat(bValue)));
      if (isNumber) {
        return (
          sort === 'ASC'
            ? parseFloat(aValue) - parseFloat(bValue)
            : parseFloat(bValue) - parseFloat(aValue));
      }
      const ifASC = aValue > bValue ? POSITIVE_NUMBER : NEGATIVE_NUMBER;
      const ifDESC = aValue < bValue ? POSITIVE_NUMBER : NEGATIVE_NUMBER;
      return (sort === 'ASC' ? ifASC : ifDESC);
    });
    return newSortedPlanets;
  };

  return (
    <table>
      <thead>
        <tr>
          { defaultHeaders.map((item, index) => <th key={ index }>{ item }</th>)}
        </tr>
      </thead>
      <tbody>
        { sortPlanets().map((planet, index) => (
          <Planet planet={ planet } key={ index } />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
