import React from 'react';
import TableBody from './TableBody';

function Table() {
  return (
    <div>
      <table>
        <thead className="table-header">
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
        <TableBody />
      </table>
    </div>
  );
}

export default Table;
