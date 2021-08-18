import React, { useContext } from 'react';
import contextTable from '../context/contextTable';

const Table = () => {
  const { data } = useContext(contextTable);
  const columns = data[0] ? Object.keys(data[0]) : [];

  return (
    <table>
      <thead>
        <tr>
          { columns.map((column) => <th key={ column }>{ column }</th>) }
        </tr>
      </thead>
      <tbody>
        {
          data.map((planet) => (
            <tr key={ planet.name }>
              { Object.values(planet)
                .map((property) => <td key={ property }>{ property }</td>) }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default Table;
