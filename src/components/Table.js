import React, { useContext } from 'react';
import { Context } from '../Provider';

function Table() {
  const { Filter: [, result] } = useContext(Context);

  function loading() {
    return <h1>Carregando...</h1>;
  }

  function createTable() {
    const values = result.results;
    const keys = Object.keys(values[0]);
    return (
      <table>
        <tr>
          {keys.map((key, i) => <th key={ i }>{key}</th>)}
        </tr>
        {values.map((value, i1) => (
          <tr key={ i1 }>
            {keys.map((key, i2) => (
              <td key={ i2 }>{value[key]}</td>
            ))}
          </tr>
        ))}
      </table>
    );
  }

  return (
    (result.results.length === 0)
      ? loading()
      : createTable()
  );
}

export default Table;
