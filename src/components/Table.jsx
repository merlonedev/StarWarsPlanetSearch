import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const { loading, filters } = useContext(AppContext);
  let { data } = useContext(AppContext);
  const { filterByName: { name } } = filters;
  if (loading) return 'Loading';
  if (name) data = data.filter((d) => d.name.toLowerCase().includes(name));
  if (!data.length) return 'No Planet Found';
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
