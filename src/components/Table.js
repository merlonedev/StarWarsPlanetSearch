import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const { state } = useContext(MyContext);
  return (

    <div>
      <table>
        <thead>
          <tr>
            {state.length > 0 && Object.keys(state[0]).map((column, index) => (
              column !== 'residents' ? <th key={ index }>{ column }</th> : null
            ))}
          </tr>
        </thead>
        <tbody>
          {state.map((eachPlanet, index) => (
            <tr key={ index }>
              { Object.values(eachPlanet).map((info) => (
                <td key={ info.name }>{ info }</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
