import React, { useContext } from 'react';
import StarWarsContext from '../contexts/StarWarsContext';

import styles from '../styles/Table.css';

const comparisonReducer = (items = [], filter) => {
  switch (filter.comparison) {
  case 'maior que': {
    return items.filter((item) => item[filter.column] > filter.value);
  }
  case 'menor que': {
    return items.filter((item) => item[filter.column] < filter.value);
  }
  case 'igual a': {
    return items.filter((item) => (
      Number(item[filter.column]) === filter.value
    ));
  }
  default: return items;
  }
};

const Table = () => {
  const {
    planets,
    columns,
    filters: {
      filterByName: { name },
      filterByNumericValues,
    },
    orderColumn,
    orderSort,
  } = useContext(StarWarsContext);

  function renderPlanetRow(planet, key) {
    return (
      <tr key={ key }>
        { Object.entries(planet).map(([prop, info], index) => (
          <td key={ index } data-testid={ prop === 'name' ? 'planet-name' : null }>
            { Array.isArray(info) ? info.join('\n') : info.toString() }
          </td>
        )) }
      </tr>
    );
  }

  function columnToNumber(columnValue) {
    return columnValue === 'unknown' ? 0 : Number(columnValue);
  }

  const filteredPlanets = filterByNumericValues
    .reduce(comparisonReducer, planets)
    .filter((planet) => (name ? planet.name.includes(name) : true));

  const isStringColumn = filteredPlanets.some((planet) => (
    Number.isNaN(columnToNumber(planet[orderColumn]))));

  filteredPlanets.sort((planetA, planetB) => {
    let result = null;
    if (isStringColumn) {
      result = planetA[orderColumn].localeCompare(planetB[orderColumn]);
    } else {
      const numberA = columnToNumber(planetA[orderColumn]);
      const numberB = columnToNumber(planetB[orderColumn]);
      result = numberA - numberB;
    }
    return orderSort === 'ASC' ? result : result * -'1';
  });

  return (
    <table className={ styles.table }>
      <thread>
        <tr>
          { columns.map((header, index) => (
            <th key={ index }>{header}</th>)) }
        </tr>
      </thread>
      <tbody>
        { filteredPlanets.map((planet, key) => renderPlanetRow(planet, key)) }
      </tbody>
    </table>
  );
};

export default Table;
