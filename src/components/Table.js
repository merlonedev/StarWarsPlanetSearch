import React, { useContext } from 'react';
import SWContext from '../context/SWContext';
import heads from '../utils/headMap';
import Loading from './Loading';

function Table() {
  const { planets } = useContext(SWContext);
  if (!planets ? Loading : null);

  return (
    <table>
      <thead>
        <tr>
          { heads() }
        </tr>
      </thead>
      <tbody>
        {planets.map((result, index) => (
          <tr key={ index }>
            <td>{result.name}</td>
            <td>{result.rotation_period}</td>
            <td>{result.orbital_period}</td>
            <td>{result.diameter}</td>
            <td>{result.climate}</td>
            <td>{result.gravity}</td>
            <td>{result.terrain}</td>
            <td>{result.surface_water}</td>
            <td>{result.population}</td>
            <td>{result.films}</td>
            <td>{result.created}</td>
            <td>{result.edited}</td>
            <td>{result.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
