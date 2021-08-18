import React, { useContext } from 'react';

import Context from '../context/Context';

function Table() {
  const { data, loading, filters } = useContext(Context);

  if (loading) return 'Loading';
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={ key }>{key}</th>

          ))}
        </tr>
      </thead>
      <tbody>
        {data
          .filter(({ name }) => name.toLowerCase()
            .includes(filters.filterByName.name.toLowerCase()))
          .map((planet, index) => (
            <tr key={ index }>
              {Object.values(planet).map((value) => (
                <td key={ value }>{value}</td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
