import React, { useContext } from 'react';
import { PlanetContext } from '../Context/PlanetProvider';

const PlanetTable = () => {
  const { planets, filters: { filterByName: { name } } } = useContext(PlanetContext);
  const topName = planets[0] || [];
  return (
    <table>
      <thead>
        <tr>
          {
            Object.keys(topName)
              .map((tName) => <th key={ tName }>{tName}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          planets.filter((planet) => (name ? (planet.name).includes(name) : true))
            .map((planet) => (
              <tr key={ planet.name }>
                {
                  Object.values(planet)
                    .map((info) => <td key={ info }>{info}</td>)
                }
              </tr>
            ))
        }
      </tbody>
    </table>
  );
};

export default PlanetTable;
