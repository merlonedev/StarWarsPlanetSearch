import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

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
    filters: {
      filterByName: { name },
      filterByNumericValues,
    },
  } = useContext(StarWarsContext);

  const headers = Object.keys(planets[0] || []);

  function renderPlanetRow(planet, key) {
    return (
      <tr key={ key }>
        { Object.values(planet).map((info, index) => (
          <td key={ index }>
            { Array.isArray(info) ? info.join('\n') : info.toString() }
          </td>
        )) }
      </tr>
    );
  }

  return (
    <table className={ styles.table }>
      <thread>
        <tr>
          { headers.map((header, index) => (
            <th key={ index }>{header}</th>)) }
        </tr>
      </thread>
      <tbody>
        { filterByNumericValues
          .reduce(comparisonReducer, planets)
          .filter((planet) => (name ? planet.name.includes(name) : true))
          .map((planet, key) => renderPlanetRow(planet, key)) }
      </tbody>
    </table>
  );
};

export default Table;
