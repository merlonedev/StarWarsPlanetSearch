import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';
import './Table.css';

function Table() {
  const { data, filters } = useContext(PlanetsContext);
  if (!data.length) return <p>Loading...</p>;

  const filterNumeric = (planets) => {
    filters.filterByNumericValues
      .forEach(({ column, comparison, value }) => {
        if (comparison === 'maior que') {
          planets = planets.filter((planet) => +planet[column] > +value);
        }
        if (comparison === 'igual a') {
          planets = planets.filter((planet) => +planet[column] === +value);
        }
        if (comparison === 'menor que') {
          planets = planets.filter((planet) => +planet[column] < +value);
        }
      });
    return planets;
  };

  const filteredPlanets = (planets) => {
    const { filterByName: { name } } = filters;
    let filter = planets
      .filter((planet) => (planet.name).toLowerCase().includes(name.toLowerCase()));

    if (filters.filterByNumericValues.length) {
      filter = filterNumeric(filter);
      return filter;
    }
    return filter;
  };

  return (
    <table className="table-content">
      <thead className="table-head">
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
      <tbody className="table-body">
        { filteredPlanets(data).map((planet) => (
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
