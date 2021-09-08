import React, { useContext, useEffect } from 'react';

import Context from '../context/Context';
import Card from './Card';

function Table() {
  const { filteredPlanets, planets, getPlanets } = useContext(Context);
  useEffect(() => { getPlanets(); }, [getPlanets]);
  return (
    <table>
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Population
          </th>
          <th>
            Climate
          </th>
          <th>
            Terrain
          </th>
          <th>
            Orbital Period
          </th>
          <th>
            Diameter
          </th>
          <th>
            Gravity
          </th>
          <th>
            Rotation Period
          </th>
          <th>
            Surface Water
          </th>
          <th>
            Films
          </th>
          <th>
            Created in
          </th>
          <th>
            Edited in
          </th>
          <th>
            Link
          </th>
        </tr>
      </thead>
      <tbody>
        {
          planets ? filteredPlanets
            .map((planet, index) => <Card key={ index } planet={ planet } />)
            : <tr><td> ...loading </td></tr>
        }
      </tbody>
    </table>
  );
}

Table.propTypes = {

};

export default Table;
