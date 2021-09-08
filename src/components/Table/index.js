import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import switchComparison from '../Filters/SwitchComparison';

function Table() {
  const {
    data,
    filters: {
      filterByName: { name },
      filterByNumericValues,
      order,
    },
  } = useContext(AppContext);

  const [dataToBeUsed, setDataToBeUsed] = useState([]);

  const sortStrings = (a, b, type) => {
    const sortInvert = -1;
    if (a[order.column] > b[order.column]) {
      return 1 * type;
    }
    if (a[order.column] < b[order.column]) {
      return sortInvert * type;
    }
    return 0;
  };

  const filterByName = () => {
    if (name) {
      return data.filter(
        (planet) => planet.name.toUpperCase().includes(name.toUpperCase()),
      );
    }
    return data;
  };
  let filtredPlanets = filterByName();

  const filterByValue = (planets) => {
    if (filterByNumericValues.length > 0) {
      let filteredData = planets;
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        filteredData = filteredData
          .filter((planet) => switchComparison(planet, column, comparison, value));
      });
      return filteredData;
    }
    return planets;
  };

  const applyFilters = () => (
    setDataToBeUsed(filterByValue(filterByName()))
  );

  useEffect(
    applyFilters,
    [data, name, filterByNumericValues],
  );

  if (dataToBeUsed.length === 0) return <h2>Loading...</h2>;

  const keysWithoutResidents = Object.keys(dataToBeUsed[0])
    .filter((key) => key !== 'residents');

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

  return (
    <table>
      <thead>
        <tr>
          {keysWithoutResidents.map((key) => <th key={ key }>{ key }</th>)}
        </tr>
      </thead>
      <tbody>
        {dataToBeUsed
          .map(({
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
          ))}
      </tbody>
    </table>
  );
}

export default Table;
