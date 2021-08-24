import React, { useContext } from 'react';
import Context from '../context/Context';

export default function Table() {
  const { data, keys, filters } = useContext(Context);
  const { name } = filters.filterByName;
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
        { name === ''
          ? (
            data.map((planet, i) => (
              <tr key={ i }>
                {keys.map((col, j) => (
                  <td key={ j }>{ planet[col]}</td>
                ))}
              </tr>
            ))
          )
          : (
            data.filter((el) => el.name.toLowerCase().includes(name.toLowerCase()))
              .map((planet, i) => (
                <tr key={ i }>
                  {keys.map((col, j) => (
                    <td key={ j }>{ planet[col]}</td>
                  ))}
                </tr>
              ))
          )}
      </tbody>
    </table>
  );
}
