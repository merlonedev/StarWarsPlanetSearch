import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import './Table.css';

const Table = () => {
  const { data } = useContext(PlanetContext);
  function generateRows() {
    return data.map((result, index) => {
      const {
        climate, created, diameter, edited, films, gravity, name,
        orbital_period: orbitalPeriod,
        population, rotation_period: rotationPeriod,
        surface_water: surfaceWater, terrain, url } = result;

      const resultsContainer = [name, rotationPeriod, orbitalPeriod,
        diameter, climate, gravity, terrain, surfaceWater,
        population, films, created, edited, url];

      return (
        <tr key={ index }>
          {
            resultsContainer.map((res, indxRes) => <td id="td" key={ indxRes }>{res}</td>)
          }
        </tr>
      );
    });
  }

  function generateColluns() {
    const objResponse = Object.keys(data[0]);
    const keys = objResponse.filter((object) => !object.includes('residents'));
    return keys.map((key, index) => <th key={ index }>{key}</th>);
  }

  return (
    <table>
      <thead>
        <tr>
          {
            data ? generateColluns() : null
          }
        </tr>
      </thead>
      <tbody>
        {
          data ? generateRows() : null
        }
      </tbody>
    </table>

  );
};

export default Table;
