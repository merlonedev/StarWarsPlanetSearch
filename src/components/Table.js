import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Table = () => {
  const { data: planets } = useContext(AppContext);
  if (planets.length === 0) return <p>Loading...</p>;

  const keys = Object.keys(planets[0]).filter((key) => key !== 'residents');

  return (
    <table>
      <thead>
        <tr>
          { keys.map((key) => <th key={ key }>{ key.toUpperCase() }</th>) }
        </tr>
      </thead>
      <tbody>
        { planets.map((planet) => (
          <tr key={ planet.name }>
            { keys.map((key) => <td key={ key }>{ planet[key] }</td>) }
          </tr>)) }
      </tbody>
    </table>
  );
};

export default Table;
