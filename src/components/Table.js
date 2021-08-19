import React, { useContext } from 'react';
import FilterContext from '../context/FilterContext';

function Table() {
  const { filters: { filterByName: { name }, filterByNumericValues, order },
    data: { planets, tableHeadData } } = useContext(FilterContext);

  let filteredPlanets = [...planets];

  if (name) {
    filteredPlanets = filteredPlanets.filter((planet) => planet.name.toLowerCase()
      .includes(name.toLowerCase()));
  }

  if (filterByNumericValues) {
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      filteredPlanets = filteredPlanets.filter((planet) => {
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

  function orderString(a, b) {
    if (a[order.column] < b[order.column]) {
      const oneNegative = -1;
      return oneNegative;
    }
    if (a[order.column] > b[order.column]) {
      return 1;
    }
    return 0;
  }

  filteredPlanets.sort((a, b) => {
    if (Number(a[order.column])) {
      return a[order.column] - b[order.column];
    }
    return orderString(a, b);
  });

  if (order.sort === 'DESC') {
    filteredPlanets.reverse();
  }

  const tableHead = () => (
    <thead>
      <tr>
        { tableHeadData.map((column, index) => (
          <th key={ index }>{column}</th>
        ))}
      </tr>
    </thead>
  );

  return (
    <table>
      { tableHead() }
      <tbody>
        { filteredPlanets.map((planet, index) => (
          <tr key={ index }>
            {tableHeadData.map((column, dataindex) => {
              if (column === 'name') {
                return (
                  <td
                    key={ dataindex }
                    data-testid="planet-name"
                  >
                    { planet[column]}
                  </td>);
              }
              return <td key={ dataindex }>{ planet[column]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
