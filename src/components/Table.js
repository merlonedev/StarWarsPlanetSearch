import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

function Table() {
  const data = useContext(DataContext);

  const keysColumnTable = data
    .map((item) => delete item.residents && Object.keys(item))[0];

  const planetsTable = data
    .map((item) => delete item.residents && item);

  return (
    <div>
      <h1>Tabela</h1>
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
