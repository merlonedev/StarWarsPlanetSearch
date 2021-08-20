import React, { useContext } from 'react';
import FilterContext from '../context/FilterContext';

function Table() {
  const value = useContext(FilterContext);
  const { planets } = value;
  if (planets.length > 0) {
    const resultsWithoutResidents = Object.keys(planets[0])
      .filter((item) => item !== 'residents');
    // Aprendi a fazer a table com o Jossany e David Gonzaga!!
    return (
      <div>
        <table>
          <thead>
            <tr>
              {resultsWithoutResidents.map((key) => <th key={ key }>{ key }</th>)}
            </tr>
          </thead>
          <tbody>
            {planets.map((planet) => (
              <tr key={ planet.name }>
                {resultsWithoutResidents.map((result) => (
                  <td
                    key={ planet[result] }
                  >
                    {planet[result]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return (<h1>Loading...</h1>);
}

export default Table;
