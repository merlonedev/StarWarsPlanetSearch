import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const Table = () => {
  const {
    planets,
    filteredPlanets,
  } = useContext(MyContext);

  const headers = planets.length > 0 && Object.keys(planets[0]).map((column, index) => (
    column !== 'residents' ? <th key={ index }>{column}</th> : null));
  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>
        { filteredPlanets.map(((planet, index) => (
          <tr key={ index }>
            {Object.values(planet).map((info) => (
              <td key={ info.name }>
                {info}
              </td>
            ))}
          </tr>))) }
      </tbody>
    </table>
  );
};

export default Table;
