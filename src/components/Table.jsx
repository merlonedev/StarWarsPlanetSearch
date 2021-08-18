import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const { data } = useContext(Context);
  console.log(data);
  return (
    <table>
      <thead>
        <tr>
          { data.length > 0
            ? Object.keys(data[0])
              .map((planet, idx) => planet !== 'residents'
                && <th key={ idx }>{ planet }</th>) : '' }
        </tr>
      </thead>
      <tbody>
        {
          data.map((planet, idx) => (
            <tr key={ idx }>
              { Object.keys(planet)
                .map((planets, i) => <td key={ i }>{planet[planets]}</td>) }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
