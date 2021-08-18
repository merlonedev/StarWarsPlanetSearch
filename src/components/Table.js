import React, { useContext } from 'react';

import TableLine from './TableLine';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
      {
        data.map((d, index) => <TableLine key={ index } data={ d } />)
      }
    </table>
  );
}

export default Table;
