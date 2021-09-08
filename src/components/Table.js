import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

import styles from '../styles/Table.css';

const Table = () => {
  const { planets } = useContext(StarWarsContext);
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
        { planets.map((planet, key) => renderPlanetRow(planet, key)) }
      </tbody>
    </table>
  );
};

export default Table;
