import React, { useContext } from 'react';
import ContextApi from '../context/ContextApi';

function Table() {
  const { data } = useContext(ContextApi);
  console.log(data);
  return (
    <section>
      <table>
        <thead>
          <tr>
            { data.map((columns) => <th key={ columns }>{ columns }</th>) }
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>a</td>
          </tr>
        </tbody>
      </table>
    </section>

  );
}

export default Table;
