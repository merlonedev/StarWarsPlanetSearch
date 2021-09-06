import React, { useContext } from 'react';
import Context from '../context';

function PlanetsTable() {
  const { data, dataError, filterPlanet } = useContext(Context);

  const filteredPlanets = filterPlanet(data);

  return (data.length > 0 && !dataError
    && (
      <table>
        <thead>
          <tr>
            {
              Object.keys(data[0]).map((header, index) => (
                <th key={ index }>{ header }</th>
              ))
            }
          </tr>
        </thead>

        <tbody>
          {
            filteredPlanets.map((planet, i) => (
              <tr key={ i }>
                {
                  Object.keys(planet).map((column, j) => (
                    <td key={ j }>{ planet[column] }</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  );
}

export default PlanetsTable;
