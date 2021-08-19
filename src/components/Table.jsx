import React, { useContext } from 'react';
import AppContext from '../context/Context';

export default function Table() {
  const { data, filters } = useContext(AppContext);

  const filterByNumeric = (planets) => {
    filters.filterByNumericValues
      .forEach(({ column, comparison, value }) => {
        if (comparison === 'igual a') {
          planets = planets.filter((planet) => +planet[column] === +value);
        }
        if (comparison === 'maior que') {
          planets = planets.filter((planet) => +planet[column] > +value);
        }
        if (comparison === 'menor que') {
          planets = planets.filter((planet) => +planet[column] < +value);
        }
      });
    return planets;
  };

  const filterPlanets = (planets) => {
    let filtered = planets
      .filter(({ name }) => name.toLowerCase()
        .includes(filters.filterByName.toLowerCase()));
    if (filters.filterByNumericValues.length) {
      filtered = filterByNumeric(filtered);
      return filtered;
    }
    return filtered;
  };

  if (!filterPlanets(data).length) { return <div>LOADING...</div>; }

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(filterPlanets(data)[0])
            .map((key, i) => (<th key={ i }>{key}</th>))}
        </tr>
      </thead>
      <tbody>
        {filterPlanets(data).map((planet, i) => (
          <tr key={ i }>
            {Object.values(planet).map((value, j) => (<td key={ j }>{value}</td>))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
