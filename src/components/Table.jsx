import React, { useContext } from 'react';
import Context from '../Context/Context';

function Table() {
  const { data } = useContext(Context);
  const { filters } = useContext(Context);

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

  function filterByNumericValuesStep(filterByNumericValues, filteredPlanets) {
    let response = null;
    const [{ column, comparison, value }] = filterByNumericValues;
    response = filteredPlanets.filter((planet) => {
      switch (comparison) {
      case 'maior que':
        return (Number(planet[column]) > Number(value));
      case 'menor que':
        return (Number(planet[column]) < Number(value));
      case 'igual a':
        return (Number(planet[column]) === Number(value));
      default:
        return null;
      }
    });
    return response;
  }

  const geraLinhas = () => {
    const { results } = data;
    const { name } = filters.filterByName;
    const { filterByNumericValues } = filters;

    if (name) {
      const planetsSearch = results.filter((result) => (
        result.name.toLowerCase().includes(name)
      ));

      return planetsSearch.map((planet, i) => gerate(planet, i));
    }

    if (filterByNumericValues.length > 0) {
      const newPlanets = filterByNumericValuesStep(filterByNumericValues, results);
      console.log(newPlanets);
      return newPlanets.map((result, index) => gerate(result, index));
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
