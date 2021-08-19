import React, { useContext } from 'react';
import uniqid from 'uniqid';
import MyContext from '../providers/MyContext';

// https://www.npmjs.com/package/uniqid
function Table() {
  const { data, filterPlanets } = useContext(MyContext);

  return (
    <table>
      <thead>
        <tr>
          { data.length > 0 && Object.keys(data[0])
            .map((myPlanet) => myPlanet !== 'residents'
              && <th key={ uniqid() }>{ myPlanet }</th>) }
        </tr>
      </thead>
      <tbody>
        { data.length > 0 && filterPlanets.map((myPlanet) => (
          <tr key={ uniqid() }>
            { Object.keys(myPlanet)
              .map((planetName) => planetName !== 'residents'
                && <td key={ uniqid() }>{ myPlanet[planetName] }</td>)}
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;
