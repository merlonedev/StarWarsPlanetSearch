import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import './Table.css';

const Table = () => {
  const { dataFiltered } = useContext(AppContext);
  console.log(dataFiltered);
  return (
    <table className="planets">
      <thead>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
          {/* { dataFiltered.length > 0 ? (
            Object.keys(dataFiltered[0]).map((key, index) => (<th key={ index }>{ key }</th>))
          ) : (<th> </th>)} */}
        </tr>
      </thead>
      <tbody>
        { dataFiltered.map((planet) => (
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
            <td>
              <ul>{planet.films.map((film, index) => <li key={ index }>{film}</li>)}</ul>
            </td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
