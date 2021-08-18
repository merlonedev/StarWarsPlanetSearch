import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const { api } = useContext(Context);

  return (
    <div>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation_period</th>
          <th>Orbital_period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface_water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { api.map((result, index) => (
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
        )) }
      </tbody>
    </div>
  );
}

export default Table;
