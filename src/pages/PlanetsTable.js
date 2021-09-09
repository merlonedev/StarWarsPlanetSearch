import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function planetRow(planet) {
  return (
    <tr key={ planet.name }>
      <td data-testid="planet-name">{ planet.name }</td>
      <td>{ planet.rotation_period }</td>
      <td>{ planet.orbital_period }</td>
      <td>{ planet.diameter }</td>
      <td>{ planet.climate }</td>
      <td>{ planet.gravity }</td>
      <td>{ planet.terrain }</td>
      <td>{ planet.surface_water }</td>
      <td>{ planet.population }</td>
      <td>{ planet.films }</td>
      <td>{ planet.created }</td>
      <td>{ planet.edited }</td>
      <td>{ planet.url }</td>
    </tr>
  );
}

export default function PlanetsTable() {
  const { planets } = useContext(PlanetsContext);
  if (planets.length === 0) return <p>Waiting for Planets</p>;
  // console.log('Table:', planets);
  return (
    <form name="planets-form">
      <table>
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
          </tr>
        </thead>
        <tbody>
          { planets.map((planet) => planetRow(planet)) }
        </tbody>
      </table>
    </form>
  );
}
