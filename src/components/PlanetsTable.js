import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function PlanetsTable() {
  const { data } = useContext(AppContext);

  const renderPlanetsList = () => data.map(({
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
  }) => (
    <tbody key={ name }>
      <tr>
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
    </tbody>));

  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Rotational Period</th>
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
      </tbody>
      { renderPlanetsList() }
    </table>);
}

export default PlanetsTable;
