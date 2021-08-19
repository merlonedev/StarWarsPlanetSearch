import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import TableData from './TableData';
import TableFilterByName from './TableFilterByName';
import TableFilterByNumericValues from './TableFilterByNumericValues';

function Table() {
  const { filters: { filterByName: { name } } } = useContext(PlanetContext);
  const { filters: { filterByNumericValues: {
    column, comparison, value,
  } } } = useContext(PlanetContext);

  const tableFilter = () => {
    if (name) return <TableFilterByName />;
    if (column || comparison || value) return <TableFilterByNumericValues />;
    if (!name && !column && !comparison && !value) return <TableData />;
  };

  return (
    <div>
      <h2>Eu sou o Componente Table!</h2>
      <table>
        <tr>
          <th>name</th>
          <th>climate</th>
          <th>created</th>
          <th>diameter</th>
          <th>edited</th>
          <th>films</th>
          <th>gravity</th>
          <th>orbital_period</th>
          <th>population</th>
          <th>rotation_period</th>
          <th>surface_water</th>
          <th>terrain</th>
          <th>url</th>
        </tr>
        { tableFilter() }
      </table>
    </div>
  );
}

export default Table;
