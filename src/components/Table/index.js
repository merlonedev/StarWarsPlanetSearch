import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MyContext } from '../../Context';

export default function Table() {
  const { data } = useContext(MyContext);

  return (
    <table>
      <thead>
        <tr>
          { data.length > 0
          && Object.keys(data[0])
            .map((key) => key !== 'residents' && <th key={ uuidv4() }>{ key }</th>) }
        </tr>
      </thead>
      <tbody>
        { data.length > 0 && data.map((planet) => (
          <tr key={ uuidv4() }>
            { Object.keys(planet).map((key) => (
              key !== 'residents' && <td key={ uuidv4() }>{ planet[key] }</td>
            )) }
          </tr>
        )) }
      </tbody>
    </table>
  );
}
