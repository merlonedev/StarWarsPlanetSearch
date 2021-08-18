import React, { useContext } from 'react';
import myContext from '../context/myContext';

function Table() {
  const { data, infos, loading } = useContext(myContext);
  return (
    <>
      {loading && 'Carregando...'}
      <table>
        <thead>
          <tr>
            {
              infos.filter((info) => info !== 'residents').map((info) => (
                <th key={ info.name }>
                  {info}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            data.map((planet) => (
              <tr key={ planet.name }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
}

export default Table;
