import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import './Table.css';

const Table = () => {
  const { data, generateRows,
    generateColluns } = useContext(PlanetContext);
  return (
    <table>
      <thead>
        <tr>
          {
            data ? generateColluns() : null
          }
        </tr>
      </thead>
      <tbody>
        {
          data ? generateRows() : null
        }
      </tbody>
    </table>

  );
};

export default Table;
