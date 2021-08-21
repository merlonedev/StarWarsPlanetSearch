import React, { useContext } from 'react';
import { context } from '../Context/Context';

function Table() {
  const { data, filter } = useContext(context);
  const { filterByName: { name } } = filter;
  const filterByName = data
    .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));

  let columns = [];
  const indexOf = 9;

  if (data.length) {
    columns = Object.keys(data[0]);
    columns.splice(indexOf, 1);
    return (
      <table border="1">
        <thead>
          <tr>
            {
              columns.map((key) => (
                <th key={ key }>{ key }</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          { filterByName.map((planet) => (
            <tr key={ planet.name }>
              { columns.map((column) => <td key={ column }>{ planet[column] }</td>) }
            </tr>
          )) }
        </tbody>
      </table>
    );
  }
  return <p>Loading...</p>;
}

export default Table;
