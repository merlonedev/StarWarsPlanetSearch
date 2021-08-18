import React, { useContext } from 'react';
import usePlanetsData from '../hooks/usePlanetsData';
import Context from '../context/Context';
import Tr from './Tr';

function Table() {
  usePlanetsData();
  const { planets } = useContext(Context);
  return (
    <section>
      <table border="1px">
        <tbody>
          <tr>
            <th>name</th>
            <th>terrain</th>
            <th>climate</th>
            <th>surface_water</th>
            <th>gravity</th>
            <th>diameter</th>
            <th>population</th>
            <th>orbital_period</th>
            <th>rotation_period</th>
            <th>films</th>
            <th>edited</th>
            <th>created</th>
            <th>url</th>
          </tr>
          { planets.map((planet) => <Tr key={ planet.name } planet={ planet } />) }
        </tbody>
      </table>
    </section>
  );
}

export default Table;
