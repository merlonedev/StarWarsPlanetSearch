import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import TableData from './TableData';
import TableFilterByName from './TableFilterByName';

function Table() {
  const { filters: { filterByName: { name } } } = useContext(PlanetContext);

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
        { name ? <TableFilterByName /> : <TableData />}
      </table>
    </div>
  );
}

export default Table;
