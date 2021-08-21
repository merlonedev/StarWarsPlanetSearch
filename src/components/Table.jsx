import React, { useContext } from 'react';
import Context from '../context/context';

function Table() {
  const {
    data,
    filters: {
      filterName,
      filterNumericValues,
    },
  } = useContext(Context);

  const headerTable = [
    'Nome', 'Período de Rotação', 'Período Orbital', 'Diâmetro', 'Clima',
    'Gravidade', 'Terreno', 'Superfície Àgua', 'População',
    'Filmes', 'Criado em', 'Editado', 'URL'];

  const filterNumDefault = { column: '', comparison: '', value: 0 };

  // seleção de filtros do context ou default
  const selection = filterNumericValues.length
    ? filterNumericValues[filterNumericValues.length - 1]
    : filterNumDefault;

  const dtPlanets = data.filter(({ name }) => name.toLowerCase().includes(filterName));

  const filteredNumerics = dtPlanets.filter((p) => {
    const { column, comparison, value } = selection;
    switch (comparison) {
    case 'maior que':
      return +p[column] > +value;

    case 'menor que':
      return +p[column] < +value;

    case 'igual a':
      return +p[column] === +value;

    default:
      return true;
    }
  });

  const filtered = filteredNumerics;

  return (
    <table>
      <thead className="table-header">
        <tr>
          {headerTable.map((ths) => <th key={ ths }>{ths}</th>)}
        </tr>
      </thead>
      <tbody className="table-body">
        {filtered.map((dt, index) => {
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
