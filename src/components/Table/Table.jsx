import React, { useContext } from 'react';
import PlanetsContext from '../../contexts/PlanetsContext';

function Table() {
  const { filteredPlanets, isFetching } = useContext(PlanetsContext);

  if (isFetching) return <div>Carregando ...</div>;

  if (!filteredPlanets.length) return <div>Busca não encontrada.</div>;

  const tableHeader = Object.keys(filteredPlanets[0]);
  return (
    <table>
      <thead>
        <tr>
          {tableHeader.map((item) => (
            <th key={ item }>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredPlanets.map((planet) => (
          <tr key={ `planet ${planet.name}` }>
            {tableHeader.map((key) => {
              if (key === 'name') {
                return (
                  <td
                    data-testid="planet-name"
                    key={ `${planet.name} ${key}` }
                  >
                    {planet[key]}
                  </td>
                );
              }
              return <td key={ `${planet.name} ${key}` }>{planet[key]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
