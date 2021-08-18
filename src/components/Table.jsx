import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const { loading, filters, setPlanets } = useContext(AppContext);
  const { filterByNumericValues } = filters;
  let { planets } = useContext(AppContext);

  const filterPlanets = () => {
    const comparisons = {
      'maior que': (col, val) => Number(col) > Number(val),
      'menor que': (col, val) => Number(col) < Number(val),
      'igual a': (col, val) => Number(col) === Number(val),
    };
    filterByNumericValues
      .forEach(({ column, comparison, value }) => setPlanets(planets
        .filter((planet) => comparisons[comparison](planet[column], value))));
  };

  useEffect(filterPlanets, [filterByNumericValues]);

  const { filterByName: { name } } = filters;
  if (loading) return 'Loading';
  if (name) planets = planets.filter((d) => d.name.toLowerCase().includes(name));
  if (!planets.length) return 'No Planet Found';

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(planets[0]).map((key, i) => (
            <th key={ i }>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {planets.map((planet, i) => (
          <tr key={ i }>
            {Object.values(planet).map((value, key) => (
              <td key={ key }>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
