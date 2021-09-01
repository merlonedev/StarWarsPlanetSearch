import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function PlanetApi() {
  const { filterPlanet } = useContext(MyContext);
  // const { filterByName: { name } } = filters;
  // const { data } = useContext(MyContext);

  const header = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population',
    'films',
    'created',
    'edited',
    'url',
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            {
              header.map((element) => (
                <th key={ element }>{ element }</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {filterPlanet.map((planet, i) => (
            <tr key={ i }>
              {Object.values(planet).map((value, key) => (
                <td key={ key }>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlanetApi;
