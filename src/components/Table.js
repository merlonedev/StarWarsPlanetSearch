import React, { useContext } from 'react';

import { FiltersContext, PayloadContext } from '../context';
import setNumericValuesFilter from '../helpers';

function Table() {
  const { data } = useContext(PayloadContext);
  const { filters } = useContext(FiltersContext);
  const { filterByName, filterByNumericValues, columnSort, ascOrDesc } = filters;
  const nameRegExp = new RegExp(filterByName.name, 'gi');

  const sortByColumn = (a, b) => {
    if (ascOrDesc === 'ASC') {
      return parseInt(a[columnSort], 10) - parseInt(b[columnSort], 10);
    }
    if (ascOrDesc === 'DESC') {
      return parseInt(b[columnSort], 10) - parseInt(a[columnSort], 10);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>climate</th>
            <th>terrain</th>
            <th>created</th>
            <th>edited</th>
            <th>diameter</th>
            <th>gravity</th>
            <th>orbital_period</th>
            <th>population</th>
            <th>rotation_period</th>
            <th>surface_water</th>
            <th>films</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((planet) => (planet.name.match(nameRegExp)))
            .filter((planet) => (filterByNumericValues.length > 0
              ? filterByNumericValues
                .every((filter) => setNumericValuesFilter(planet, filter))
              : planet))
            .sort((a, b) => a.name.localeCompare(b.name))
            .sort((a, b) => (ascOrDesc && sortByColumn(a, b))) // Refatorar!
            .map((planet) => (
              <tr key={ planet.name }>
                <td data-testid="planet-name">{planet.name}</td>
                <td>{planet.climate}</td>
                <td>{planet.terrain}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.diameter}</td>
                <td>{planet.gravity}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.population}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.films}</td>
                <td>{planet.url}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
