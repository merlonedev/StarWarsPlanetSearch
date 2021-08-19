import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const { planets } = useContext(Context);
  // console.log(data);
  // const [planets, setPlanets] = useState([]);

  return (
    <div>
      <h2>Table</h2>
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
