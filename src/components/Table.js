import React, { useContext } from 'react';
import { Context } from '../context/Context';

export default function Table() {
  const { planets } = useContext(Context);
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>surface_water</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>population</th>
          <th>url</th>
        </tr>
      </thead>
      {planets.map((planet) => (
        <tbody key="planet.name">
          <tr>
            <td>{planet.name}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.terrain}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.population}</td>
            <td>{planet.url}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}
