import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const { data, filterName } = useContext(MyContext);
  if (data.length === 0) return <p>Loading</p>;
  if (filterName.length === 0) return <p>Ops! Não existe esse planeta!</p>;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          { filterName.map((filtered) => (
            <tr key={ filtered.name }>
              <td>{ filtered.name }</td>
              <td>{ filtered.rotation_period }</td>
              <td>{ filtered.orbital_period }</td>
              <td>{ filtered.diameter }</td>
              <td>{ filtered.climate }</td>
              <td>{ filtered.gravity }</td>
              <td>{ filtered.terrain }</td>
              <td>{ filtered.surface_water }</td>
              <td>{ filtered.population }</td>
              <td>{ filtered.films }</td>
              <td>{ filtered.created }</td>
              <td>{ filtered.edited }</td>
              <td>{ filtered.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
