import React, { useContext } from 'react';
import SWContext from '../context/Context';

function Table() {
  const { planets, filters: { filterName,
    numericFilter } } = useContext(SWContext);
  const dataPlanets = filterName.name
    ? planets.filter((planet) => planet.name.includes(filterName.name))
    : planets;

  const defaultNumericFilter = {
    comparison: '',
    column: '',
    value: 0,
  };

  const selectedFilter = numericFilter.length
    ? numericFilter[numericFilter.length - 1]
    : defaultNumericFilter;

  const { column, comparison, value } = selectedFilter;

  const selectFilter = dataPlanets.filter((planet) => {
    switch (comparison) {
    case 'maior que':
      return planet[column] > value;
    case 'igual a':
      return Number(planet[column]) === value;
    case 'menor que':
      return planet[column] < value;
    default:
      return true;
    }
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Filmes</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>

      <tbody>
        { selectFilter.map((planet, index) => (
          <tr key={ index }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;
