import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

function Table() {
  const { data, filters } = useContext(DataContext);
  const { filterByName, filterByNumericValues } = filters;

  let dataPlanets = [...data];

  if (filterByName.name) {
    dataPlanets = dataPlanets
      .filter((planet) => planet.name.toLowerCase().includes(filterByName.name));
  }

  if (filterByNumericValues && filterByNumericValues.length !== 0) {
    filterByNumericValues.forEach(({ column, comparison, values }) => {
      switch (comparison) {
      case 'maior que':
        dataPlanets = dataPlanets
          .filter((planet) => parseInt(planet[column], 10) > parseInt(values, 10));
        break;
      case 'menor que':
        dataPlanets = dataPlanets
          .filter((planet) => parseInt(planet[column], 10) < parseInt(values, 10));
        break;
      case 'igual a':
        dataPlanets = dataPlanets.filter((planet) => planet[column] === values);
        break;
      default:
        break;
      }
    });
  }

  const keysColumnTable = dataPlanets
    .map((item) => delete item.residents && Object.keys(item))[0];

  const planetsTable = dataPlanets
    .map((item) => delete item.residents && item);

  return (
    <div>
      <table>
        <thead>
          <tr>
            { keysColumnTable && keysColumnTable
              .map((item, index) => <th key={ index }>{ item }</th>) }
          </tr>
        </thead>
        <tbody>
          { planetsTable.map((planet) => (
            <tr key={ planet.name }>
              { keysColumnTable
                .map((column) => (column === 'name' ? (
                  <td data-testid="planet-name" key={ column }>{ planet[column] }</td>
                ) : <td key={ column }>{ planet[column] }</td>)) }
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
