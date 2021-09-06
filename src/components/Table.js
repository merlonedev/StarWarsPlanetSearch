import React from 'react';
import Context from '../context/Context';

export default function Table() {
  const context = useContext(Context);
  const { data } = context;
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
        {data.map((planets) => (
          <tr key={ planets.name }>
            {table.map((header) => <td key={ header }>{planets[header]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
