import React, { useContext } from 'react';
import context from '../context';

import Planet from './Planet';
import defaultHeaders from '../helpers/defaultHeaders';

function Table() {
  const { planets } = useContext(context);
  console.log(planets);
  return (
    <table>
      <thead>
        <tr>
          { defaultHeaders.map((item, index) => <th key={ index }>{ item }</th>)}
        </tr>
      </thead>
      <tbody>
        { planets.map((planet, index) => (
          <Planet planet={ planet } key={ index } />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
