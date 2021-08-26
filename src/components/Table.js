import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Table = () => {
  const { data, filters } = useContext(StarWarsContext);
  const { filterByName: { name }, filterByNumericValues } = filters;

  if (!data.length) return <p>LOADING...</p>;

  const filterPlanets = () => {
    let planets = [...data];
    planets = data.filter((planet) => planet.name.includes(name));

    filterByNumericValues.forEach(({ column, comparison, value }) => {
      switch (comparison) {
      case 'maior que':
        planets = planets.filter((planet) => Number(planet[column]) > Number(value));
        return planets;
      case 'menor que':
        planets = planets.filter((planet) => Number(planet[column]) < Number(value));
        return planets;
      case 'igual a':
        planets = planets.filter((planet) => Number(planet[column]) === Number(value));
        return planets;
      default:
        return planets;
      }
    });
    return planets;
  };

  const header = Object.keys(data[0]).filter((key) => key !== 'residents');

  return (
    <table>
      <thead>
        <tr>
          {header.map((head) => <th key={ head }>{head}</th>)}
        </tr>
      </thead>
      <tbody>
        {filterPlanets().map((info) => (
          <tr key={ info.name }>
            {header.map((head) => <td key={ info[head] }>{ info[head] }</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
