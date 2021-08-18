import React, { useContext } from 'react';
import StarContext from '../context/StarContext';
import TableLines from './TableLines';

function MainTable() {
  const { results } = useContext(StarContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {results.map((e) => <TableLines objData={ e } key={ e.name } />)}
      </tbody>
    </table>
  );
}

export default MainTable;
