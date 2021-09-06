import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function planetRow(planet) {
  return (
    <tr key={ planet.name }>
      <td>{ planet.name }</td>
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
  console.log(planets);
  if (planets.length === 0) return <p>Waiting for Planets</p>;
  return (
    <form name="planets-form">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Período de Rotation</th>
            <th>Período Orbital</th>
            <th>Diametro</th>
            <th>Clima</th>
            <th>Força Gravitacional</th>
            <th>Terreno</th>
            <th>Superfície Aquática</th>
            <th>População</th>
            <th>Filmes</th>
            <th>Criado</th>
            <th>Editado</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          { planets.map((planet) => planetRow(planet)) }
        </tbody>
      </table>
    </form>
  );
}
