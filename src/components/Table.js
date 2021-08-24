import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

function Table() {
  const { data, filter } = useContext(DataContext);

  let dataPlanets = [...data];

  if (filter.name) {
    dataPlanets = dataPlanets
      .filter((planet) => planet.name.toLowerCase().includes(filter.name));
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
                .map((column) => <td key={ column }>{ planet[column] }</td>) }
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
