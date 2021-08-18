import React, { useContext } from 'react';
import Context from '../context/context';

function Table() {
  const { data } = useContext(Context);
  const headerTable = [
    'Nome', 'Período de Rotação', 'Período Orbital', 'Diâmetro', 'Clima',
    'Gravidade', 'Terreno', 'Superfície Àgua', 'População',
    'Filmes', 'Criado em', 'Editado', 'URL'];
  return (
    <table>
      <thead className="table-header">
        <tr>
          {headerTable.map((ths) => <th key={ ths }>{ths}</th>)}
        </tr>
      </thead>
      <tbody className="table-body">
        {data.map((dt, index) => {
          const {
            climate, created, diameter, edited, films, gravity,
            name, orbital_period: orbitalPeriod, population,
            rotation_period: rotationPeriod, surface_water: surfaceWater, terrain, url,
          } = dt;
          return (
            <tr key={ index }>
              <td>{name}</td>
              <td>{rotationPeriod}</td>
              <td>{orbitalPeriod}</td>
              <td>{diameter}</td>
              <td>{climate}</td>
              <td>{gravity}</td>
              <td>{terrain}</td>
              <td>{surfaceWater}</td>
              <td>{population}</td>
              <td>{films}</td>
              <td>{created}</td>
              <td>{edited}</td>
              <td>{url}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
