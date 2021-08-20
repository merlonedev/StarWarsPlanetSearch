import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const { api, planetFilter } = useContext(Context);
  // console.log(planetFilter);
  const jonas = (result, index) => (
    <tr key={ index }>
      {
        Object.values(result).map((element, key) => (
          <td key={ key }>{ element }</td>))
      }
    </tr>
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation_period</th>
          <th>Orbital_period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface_water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {
          planetFilter.length > 0
            ? planetFilter.map((result, index) => jonas(result, index))
            : api.map((result, index) => jonas(result, index))
        }
      </tbody>
    </table>
  );
}

export default Table;
