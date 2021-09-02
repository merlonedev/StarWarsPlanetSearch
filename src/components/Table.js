import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';
import Card from './Card';

function Table() {
  const { planets, getPlanets } = useContext(Context);
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
        { planets ? planets.results
          .map((planet, index) => <Card key={ index } planet={ planet } />)
          : <tr><th> ...loading</th></tr>}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  props: PropTypes.any,
}.isRequired;

export default Table;
