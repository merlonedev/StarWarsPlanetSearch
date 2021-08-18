import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const { planets } = useContext(AppContext);
  const columns = (planets.length) ? Object.keys(planets[0]) : [];

  return (
    <table>
      <thead>
        <tr>
          { columns.map((key) => <th key={ key }>{key}</th>)}
        </tr>
      </thead>
      <tbody>
        { planets.map(({
          name,
          rotation_period: rotationPeriod,
          orbital_period: orbitalPeriod,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water: surfaceWater,
          population,
          films,
          created,
          edited,
          url,
        }, index) => (
          <tr key={ index }>
            <td>{name}</td>
            <td>{rotationPeriod}</td>
            <td>{orbitalPeriod}</td>
            <td>{diameter}</td>
            <td>{climate}</td>
            <td>{gravity}</td>
            <td>{terrain}</td>
            <td>{surfaceWater}</td>
            <td>{population}</td>
            <td>{films}</td>
            <td>{created}</td>
            <td>{edited}</td>
            <td>{url}</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;
