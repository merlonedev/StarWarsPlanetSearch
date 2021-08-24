import React, { useContext } from 'react';
import ContextApi from '../context/ContextApi';

function Table() {
  const { data, columns } = useContext(ContextApi);
  // console.log(data);
  return (
    <section>
      <table>
        <thead>
          <tr>
            { columns.map((item) => <th key={ item }>{ item }</th>) }
          </tr>
        </thead>
        <tbody>
          {
            data.map((planet, index) => (
              <tr key={ index }>
                <td data-testid="planet-name">{planet.name}</td>
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
              </tr>))
          }
        </tbody>
      </table>
    </section>

  );
}

export default Table;
