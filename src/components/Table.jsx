import React, { useContext } from 'react';
import StarContext from '../context/StarContext';

function Table() {
  const { data } = useContext(StarContext);
  console.log(data);

  return (
    <h1>teste</h1>
  );
}

/*  const { planets } = Object.keys(results[0]).filter((tag) => tag !== 'residents');
  return (
    <div>
      <table>
        <thead>
          <tr>
            { planets.map((key) => (<th key={ key }>{ key }</th>))}
          </tr>
        </thead>
      </table>
    </div>
  );
}
*/

export default Table;
