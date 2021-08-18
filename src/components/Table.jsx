import React, { useContext } from 'react';
import Context from '../Context/Context';

function Table() {
  const { contextValue: { data } } = useContext(Context);
  const { contextValue: { filters } } = useContext(Context);

  const geraLinhas = () => {
    const { results } = data;
    const { name } = filters.filterByName;

    const gerate = (planet, i) => {
      const {
        climate, created, diameter, edited, films, gravity, name: namePlanet,
        orbital_period: orbital, population, rotation_period: rotation,
        surface_water: surface, terrain, url,
      } = planet;

      const arrayResult = [
        namePlanet, rotation, orbital, diameter, climate, gravity,
        terrain, surface, population, films, created, edited, url,
      ];

      return (
        <tr key={ i }>
          { arrayResult.map((text, inde) => <td key={ inde }>{ text }</td>) }
        </tr>
      );
    };

    if (name) {
      const planetsSearch = results.filter((result) => (
        result.name.toLowerCase().includes(name)
      ));

      return planetsSearch.map((planet, i) => gerate(planet, i));
    }
    return results.map((result, index) => gerate(result, index));
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
