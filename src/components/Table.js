import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const {
    data,
    filters: {
      filterByName: { name },
      filterByNumericValues,
      order,
    } } = useContext(AppContext);
  const tableHeaders = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population',
    'films',
    'created',
    'edited',
    'url',
  ];

  const filterPlanetsByName = () => {
    if (name) {
      return data.filter(
        (planet) => planet.name.toUpperCase().includes(name.toUpperCase()),
      );
    }
    return data;
  };
  let filtredPlanets = filterPlanetsByName();

  const filterPlanetsByValues = () => {
    if (filterByNumericValues) {
      filterByNumericValues.forEach(({ comparison, column, value }) => {
        switch (comparison) {
        case 'maior que':
          filtredPlanets = filtredPlanets.filter(
            (planet) => (parseInt(planet[column], 10) > value),
          );
          break;
        case 'menor que':
          filtredPlanets = filtredPlanets.filter(
            (planet) => (parseInt(planet[column], 10) < value),
          );
          break;
        case 'igual a':
          filtredPlanets = filtredPlanets.filter(
            (planet) => parseInt(planet[column], 10) === parseInt(value, 10),
          );
          break;
        default:
          break;
        }
      });
    }
  };
  filterPlanetsByValues();

  const sortStrings = (a, b, type) => {
    const sortInvert = -1;
    if (a[order.column] > b[order.column]) {
      return 1 * type;
    }
    if (a[order.column] < b[order.column]) {
      return sortInvert * type;
    }
    // a must be equal to b
    return 0;
  };

  const sortNumbers = (a, b, type) => type * a[order.column] - type * b[order.column];

  const sortPlanets = () => {
    const sortInvert = -1;
    let type = 1;
    const numberData = [
      'rotation_period',
      'orbital_period',
      'diameter',
      'surface_water',
      'population',
    ];

    if (order.sort === 'ASC') {
      type = 1;
    } else if (order.sort === 'DESC') {
      type = sortInvert;
    }
    if (numberData.some((column) => column === order.column)) {
      filtredPlanets = filtredPlanets.sort((a, b) => sortNumbers(a, b, type));
    } else {
      filtredPlanets = filtredPlanets.sort((a, b) => sortStrings(a, b, type));
    }
  };
  sortPlanets();

  const renderTable = (planets) => (
    <div>
      <table>
        <tbody>
          <tr>
            {tableHeaders.map((header) => (
              <th key={ header }>{header}</th>
            ))}
          </tr>
          {planets.map(
            ({
              name: planetName,
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
              <tr key={ planetName }>
                <td data-testid="planet-name">{planetName}</td>
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
            ),
          )}
        </tbody>
      </table>
    </div>
  );
  return renderTable(filtredPlanets);
}

export default Table;
