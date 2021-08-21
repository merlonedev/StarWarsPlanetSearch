import React, { useContext } from 'react';
import SWContext from '../context/SWContext';
import Loading from './Loading';

function Table() {
  const { planets } = useContext(SWContext);
  if (!planets) return Loading;

  return (
    <div>
      <table>
        <thead>
          <tr>
            { Object.keys(planets[0])
              .map((key) => <th key={ key }>{ key.toLocaleUpperCase() }</th>) }
          </tr>
        </thead>
        <tbody>
          {planets.map((result) => (
            <tr key={ result.name }>
              { Object.keys(planets[0])
                .map((key) => <td key={ key }>{ result[key] }</td>)}
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
