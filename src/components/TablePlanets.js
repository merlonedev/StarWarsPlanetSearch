import React, { useContext } from 'react';
import Context from '../context/Context';

function TabletPlanets() {
  const { newListPlanets, planetFilters } = useContext(Context);

  const HEADERS_TABLE = Object.keys(newListPlanets[0]);

  const NUMBER_RAMDOM = 10000;

  const LineHeader = (
    <tr>
      {
        HEADERS_TABLE.map((header) => (
          <th key={ Math.random() * NUMBER_RAMDOM }>
            { header.replace('_', ' ').toUpperCase() }
          </th>
        ))
      }
    </tr>
  );

  const linesContent = (
    planetFilters.map((planet) => (
      <tr key={ Math.random() * NUMBER_RAMDOM }>
        {
          Object.values(planet).map((type) => (
            <td key={ Math.random() * NUMBER_RAMDOM }>{ type }</td>
          ))
        }
      </tr>
    ))
  );

  return (
    <table>
      <thead>
        { LineHeader }
      </thead>
      <tbody>
        { linesContent }
      </tbody>
    </table>
  );
}

export default TabletPlanets;
