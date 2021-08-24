import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

const Table = () => {
  const { planets, filters } = useContext(StarWarsContext);
  if (!planets.length) return <h2>Loading...</h2>;
  const { filterByNumericValues } = filters;
  let filterPlanets = [...planets];
  const titleTable = Object.keys(
    filterPlanets[0],
  ).filter((headers) => headers !== 'residents');

  if (filterByNumericValues.length > 0) {
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      filterPlanets = filterPlanets.filter((planet) => {
        if (comparison === 'maior que') {
          return Number(planet[column]) > Number(value);
        }
        if (comparison === 'menor que') {
          return Number(planet[column]) < Number(value);
        }
        return Number(planet[column]) === Number(value);
      });
      console.log(filterPlanets);
      return filterPlanets;
    });
  }
  return (
    <table>
      <thead>
        <tr>
          {titleTable.map((title) => <th key={ title }>{title.replace('_', ' ')}</th>)}
        </tr>
      </thead>
      <tbody>
        {filterPlanets.map((planet) => (
          // Essa estrutura do td do body da table eu consegui através do pull request do David Gonzaga.
          // https://github.com/tryber/sd-012-project-starwars-planets-search/pull/13/files
          <tr key={ planet.name }>
            {titleTable.map((dataPlanet) => (
              <td key={ planet[dataPlanet] }>{planet[dataPlanet]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
