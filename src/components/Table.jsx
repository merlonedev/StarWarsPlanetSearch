import React, { useContext } from 'react';
import Context from '../Context/Context';

function Table() {
  const { data } = useContext(Context);

  const geraLinhas = () => {
    const { results } = data;
    return results.map((result, index) => {
      const {
        climate, created, diameter, edited, films, gravity, name,
        orbital_period: orbital, population, rotation_period: rotation,
        surface_water: surface, terrain, url,
      } = result;
      const arrayResult = [
        name, rotation, orbital, diameter, climate, gravity,
        terrain, surface, population, films, created, edited, url,
      ];

      return (
        <tr key={ index }>
          { arrayResult.map((text, inde) => <td key={ inde }>{ text }</td>) }
        </tr>
      );
    });
  };

  const geraColunas = () => {
    const keys = Object.keys(data.results[0]);
    const realKeys = keys.filter((key) => key !== 'residents');
    return realKeys.map((key, index) => <th key={ index }>{ key }</th>);
  };

  return (
    <table>
      <thead>
        <tr>
          { data ? geraColunas() : null }
        </tr>
      </thead>
      <tbody>
        { data ? geraLinhas() : null }
      </tbody>
    </table>
  );
}

export default Table;
