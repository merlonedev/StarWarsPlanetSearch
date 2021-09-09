import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function Table() {
  const { planets } = useContext(AppContext);

  const renderInfo = (data) => {
    const infoPlanets = Object.values(data);

    return (
      <tr key={ data.name }>
        {infoPlanets.map((info, index) => {
          if (!index) {
            return (
              <td key={ info }>
                {info}
              </td>
            );
          }

          return <td key={ info }>{info}</td>;
        })}
      </tr>
    );
  };

  if (!planets.length) return <span>Carregando!</span>;
  return (
    <div>
      <table>
        <thead>
          <tr>
            {Object.keys(planets[0])
              .map((info) => <th key={ info }>{info.toUpperCase()}</th>)}
          </tr>
        </thead>
        <tbody>
          {planets.map((planet) => renderInfo(planet))}
        </tbody>
      </table>
    </div>
  );
}
