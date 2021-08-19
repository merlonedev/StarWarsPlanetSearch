import React, { useContext } from 'react';
import Context from '../context/Context';

function App() {
  const { filters } = useContext(Context);
  let { filted } = useContext(Context);
  const { filterByNumericValues } = filters;

  if (filterByNumericValues) {
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      filted = filted.filter((planet) => {
        if (comparison === 'maior que') {
          return Number(planet[column]) > value;
        }
        if (comparison === 'menor que') {
          return Number(planet[column]) < value;
        }
        return planet[column] === value;
      });
    });
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Climate</th>
          <th>Created</th>
          <th>Diameter</th>
          <th>Edited</th>
          <th>Films</th>
          <th>Gravity</th>
          <th>Orbital Period</th>
          <th>Population</th>
          <th>Rotation Period</th>
          <th>Surface Water</th>
          <th>Terrain</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {
          filted.map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.climate}</td>
              <td>{planet.created}</td>
              <td>{planet.diameter}</td>
              <td>{planet.edited}</td>
              <td>{planet.films}</td>
              <td>{planet.gravity}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.population}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.terrain}</td>
              <td>{planet.url}</td>
            </tr>))
        }
      </tbody>
    </table>
  );
}

export default App;
