import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

const Table = () => {
  const { planets } = useContext(StarWarsContext);
  if (!planets.length) return <h2>Loading...</h2>;

  const titleTable = Object.keys(planets[0]).filter((headers) => headers !== 'residents');

  return (
    <table>
      <thead>
        <tr>
          {titleTable.map((title) => <th key={ title }>{title.replace('_', ' ')}</th>)}
        </tr>
      </thead>
      <tbody>
        {planets.map((planet) => (
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
