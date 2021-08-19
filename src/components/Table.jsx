import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, dataHead } = useContext(StarWarsContext);

  return (
    <div>
      <table>
        <thead>
          <tr>{ dataHead.map((title) => <th key={ title }>{ title }</th>) }</tr>
        </thead>
        <tbody>
          { data.map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          )) }
        </tbody>

      </table>
    </div>
  );
}

export default Table;
