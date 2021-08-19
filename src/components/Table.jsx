import React, { useContext } from 'react';
import MyContext from '../context/Context';

function Table() {
  const { data } = useContext(MyContext);
  return (
    <table>
      <thead>
        <tr>
          {
            data.length > 0
          && Object.keys(data[0])
            .map(
              (key) => key !== 'residents'
              && <th key={ key }>{ key }</th>,
            )
          }
        </tr>
      </thead>
      <tbody>
        { data.length > 0
        && data.map((planet, index) => (
          <tr key={ index }>
            { Object.keys(planet).map((key) => (
              key !== 'residents' && <td key={ key }>{ planet[key] }</td>
            )) }
          </tr>
        )) }
      </tbody>
    </table>
  );
}
export default Table;
