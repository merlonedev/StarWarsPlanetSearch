import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function Table() {
  const { planets, isLoading, searchInput } = useContext(AppContext);

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

  if (!isLoading) return <span>Carregando!</span>;
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
          {planets.filter((planet) => {
            if (planet.name.toLowerCase()
              .includes(searchInput.toLowerCase())) return planet;
            return null;
          }).map((planet) => renderInfo(planet))}
        </tbody>
      </table>
    </div>
  );
}
