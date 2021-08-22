import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';

function Table() {
  const { data, filters } = useContext(planetsContext);

  const tableHeader = () => {
    if (data.length > 1) {
      const header = data
        ? Object.keys(data[0]).filter((column) => column !== 'residents') : '';
      return (
        <thead>
          <tr>
            {
              header.map((column) => (
                <th key={ column }>
                  { column }
                </th>
              ))
            }
          </tr>
        </thead>
      );
    }
  };

  const tableBody = (a = data) => {
    if (a.length) {
      return (
        <tbody>
          { a.map((planet, i) => (
            <tr key={ i }>
              <td>
                { planet.name }
              </td>
              <td>
                { planet.rotation_period }
              </td>
              <td>
                { planet.orbital_period }
              </td>
              <td>
                { planet.diameter }
              </td>
              <td>
                { planet.climate }
              </td>
              <td>
                { planet.gravity }
              </td>
              <td>
                { planet.terrain }
              </td>
              <td>
                { planet.surface_water }
              </td>
              <td>
                { planet.population }
              </td>
              <td>
                { planet.films }
              </td>
              <td>
                { planet.created }
              </td>
              <td>
                { planet.edited }
              </td>
              <td>
                { planet.url }
              </td>
            </tr>
          ))}
        </tbody>
      );
    }
  };

  const operatorFunc = {
    'maior que': (x, y) => x > y,
    'menor que': (x, y) => x < y,
    'igual a': (x, y) => x === y,
  };

  const filterByValue = (tableInfo = data) => {
    const { filterByNumericValues } = filters;
    const { column, comparison, value } = filterByNumericValues[0];

    if (column.length > 0) {
      const filteredByValue = tableInfo.filter((planet) => {
        const comparator = (
          operatorFunc[comparison](parseInt(planet[column], 10), parseInt(value, 10)));
        return comparator;
      });
      return tableBody(filteredByValue);
    }
    return tableBody(tableInfo);
  };

  const filterName = () => {
    const { filterByName } = filters;
    const { name } = filterByName;
    if (name.length > 0) {
      const filteredByName = data.filter(
        (planet) => planet.name.toLowerCase().includes(name.toLowerCase()),
      );
      return filterByValue(filteredByName);
    }
    return (filterByValue(data));
  };

  return (
    <table>
      {tableHeader()}
      {filterName()}
    </table>);
}

export default Table;
