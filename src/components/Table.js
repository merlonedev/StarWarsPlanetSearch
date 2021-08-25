import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';

export default function Table() {
  const { data, keys, filters } = useContext(Context);
  const { name } = filters.filterByName;

  const [localData, setLocalData] = useState([]);

  const menosUm = -1;
  const lastFilter = filters.filterByNumericValues.slice(menosUm)[0];

  useEffect(() => {
    const { column, comparison, value } = lastFilter;
    switch (comparison) {
    case 'maior que':
      setLocalData(data.filter((e) => e[column] > value));
      break;
    case 'menor que':
      setLocalData(data.filter((e) => e[column] < value));
      break;
    case 'igual a':
      setLocalData(data.filter((e) => parseFloat(e[column]) === value));
      break;
    default:
      setLocalData(data);
      break;
    }
  }, [filters, data, lastFilter]);

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
            localData.map((planet, i) => (
              <tr key={ i }>
                {keys.map((col, j) => (
                  <td key={ j }>{ planet[col]}</td>
                ))}
              </tr>
            ))
          )
          : (
            localData.filter((el) => el.name.toLowerCase().includes(name.toLowerCase()))
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
