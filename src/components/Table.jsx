import React, { useContext } from 'react';
import MyContext from '../providers/MyContext';

function Table() {
  const { data } = useContext(MyContext);

  return (
    <table>
      <thead>
        <tr>
          { data.length > 0 && Object.keys(data[0])
            .map((myPlanet) => myPlanet !== 'residents'
              && <th key={ myPlanet.name }>{ myPlanet }</th>) }
        </tr>
      </thead>
      <tbody>
        { data.length > 0 && data.map((myPlanet) => (
          <tr key={ myPlanet.name }>
            { Object.keys(myPlanet)
              .map((planetName) => planetName !== 'residents'
                && <td key={ planetName.name }>{ myPlanet[planetName] }</td>)}
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;
