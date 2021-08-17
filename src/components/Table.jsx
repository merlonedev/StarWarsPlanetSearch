import React from 'react';
import { shape, string, arrayOf } from 'prop-types';

export default function Table({ planets }) {
  if (!planets.length) { return <div>LOADING...</div>; }
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(planets[0]).map((key, i) => {
            if (key === 'residents') { return; }
            return (<th key={ i }>{key}</th>);
          })}
        </tr>
      </thead>
      <tbody>
        {planets.map((planet, i) => {
          const data = Object.values(planet);
          return (
            <tr key={ i }>
              {data.map((value, key) => (<td key={ key }>{value}</td>))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  planets: arrayOf(shape({
    name: string,
    rotation_period: string,
    orbital_period: string,
    diameter: string,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: string,
    population: string,
    films: arrayOf(string),
    created: string,
    edited: string,
    url: string,
  })).isRequired,
};
