import React, { useContext } from 'react';
import Context from '../context/Context';
import useFilters from '../hooks/useFilters';

function Table() {
  const { data } = useContext(Context);
  const { fillFilters } = useFilters();

  if (data.length > 0 && fillFilters().length > 0) {
    const headerTable = Object.keys(data[0]).filter((head) => head !== 'residents');
    return (
      <table>
        <thead>
          <tr>
            {
              headerTable.map((column) => <th key={ column }>{ column }</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            fillFilters().map((planet) => (
              <tr key={ planet.name }>
                { headerTable.map((column) => {
                  if (column === 'name') {
                    return (
                      <td
                        key={ column }
                        data-testid="planet-name"
                      >
                        { planet[column] }
                      </td>);
                  }
                  return <td key={ column }>{ planet[column] }</td>;
                }) }
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
  return <span>Loading...</span>;
}

export default Table;
