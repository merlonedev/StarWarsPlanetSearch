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

  const swFilms = {
    1: 'A New Hope',
    2: 'The Empire Strikes Back',
    3: 'The Return of Jedi',
    4: 'The Phantom Menace',
    5: 'The Attack of the Clones',
    6: 'The Revenge of the Sith',
  };

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
            {Object.values(planet).map((value, key) => {
              if (Array.isArray(value)) {
                const movieNames = Object.values(value)
                  .map((film) => swFilms[film
                    .split('/')[(film.split('/')).length - 2]])
                  .join(', ');

                return (
                  <td key={ `cell-${key}` }>
                    <span>
                      {movieNames}
                    </span>
                  </td>
                );
              }
              return (
                <td key={ key }>{value}</td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
