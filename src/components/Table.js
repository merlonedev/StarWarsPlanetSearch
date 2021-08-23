import React, { useContext } from 'react';
import Context from '../Context/Context';

function Table() {
  const { planets } = useContext(Context);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation period</th>
            <th>Orbital period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          { planets.map((results) => (
            <tr key={ results.name }>
              <td>{ results.name }</td>
              <td>{ results.rotation_period }</td>
              <td>{ results.orbital_period }</td>
              <td>{ results.diameter }</td>
              <td>{ results.climate }</td>
              <td>{ results.gravity }</td>
              <td>{ results.terrain }</td>
              <td>{ results.surface_water }</td>
              <td>{ results.population }</td>
              <td>{ results.films }</td>
              <td>{ results.created }</td>
              <td>{ results.edited }</td>
              <td>{ results.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

// As linhas da tabela foram copiadas da branch da colega Marcela Siva
// https://github.com/tryber/sd-012-project-starwars-planets-search/blob/marcela-silva-starwars-planets-search
