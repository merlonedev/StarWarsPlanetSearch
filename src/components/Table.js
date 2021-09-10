import React, { useContext } from 'react';
import contextTable from '../context/contextTable';

const Table = () => {
  const { data, filteredPlanets } = useContext(contextTable);
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
          filteredPlanets.map((planet) => (
            <tr key={ planet.name }>
              {
                Object.values(planet)
                  .map((property) => (
                    <td
                      key={ property }
                      data-testid={
                        property === planet.name ? 'planet-name' : ''
                      }
                    >
                      { property }
                    </td>))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default Table;
