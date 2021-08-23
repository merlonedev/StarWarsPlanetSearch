import React, { useContext } from 'react';
import Context from '../context/Context';

export default function Table() {
  const { data, keys } = useContext(Context);
  return (
    <table>
      <thead>
        <tr>
          { keys.map((col, key) => (
            <th key={ key }>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        { data.map((planet, index) => (
          <tr key={ index }>
            {keys.map((column, dataindex) => (
              <td key={ dataindex }>{ planet[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
