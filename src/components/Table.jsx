import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function Table() {
  const { data, isFetching } = useContext(PlanetsContext);

  if (isFetching) return <div>Carregando ...</div>;

  let tableHeader = data;
  const planets = data;
  if (data.length) {
    planets.forEach((planet) => {
      delete planet.residents;
    });
    tableHeader = Object.keys(planets[0]);
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
          {planets.map((planet, index) => (
            <tr key={ index }>
              {tableHeader.map((key) => (
                <td key={ `${planet.name} ${key}` }>{planet[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
