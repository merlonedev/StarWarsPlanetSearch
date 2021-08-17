import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const { data, loading } = useContext(AppContext);
  if (loading) return 'Loading';
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key, i) => (
            <th key={ i }>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((planet, i) => (
          <tr key={ i }>
            {Object.values(planet).map((value, key) => (
              <td key={ key }>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
