import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import useNumericFilters from '../hooks/useNumericFilters';

function Table() {
  const { loading, filters } = useContext(AppContext);
  const { filterByNumericValues } = filters;
  const [filterPlanets] = useNumericFilters();
  let { planets } = useContext(AppContext);

  useEffect(filterPlanets, [filterByNumericValues]);

  const { filterByName: { name } } = filters;
  if (loading) return 'Loading';
  if (name) planets = planets.filter((d) => d.name.toLowerCase().includes(name));
  if (!planets.length) return 'No Planets Found';

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
