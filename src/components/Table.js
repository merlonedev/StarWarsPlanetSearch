import React, { useContext } from 'react';
import Context from '../context/Context';

export default function Table() {
  const { data, filterPlanets } = useContext(Context);
  const filteredData = filterPlanets(data);

  let table = [];

  if (data.length > 0) {
    table = Object.keys(data[0]);
  }

  if (!data.length > 0) {
    return <div>No data</div>;
  }
  return (
    <table>
      <thead>
        <tr>
          {table.map((item) => <th key={ item }>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        {filteredData.map((planets) => (
          <tr key={ planets.name }>
            {table.map((header) => <td key={ header }>{planets[header]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
