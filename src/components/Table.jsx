import React, { useContext } from 'react';
import ContextApi from '../context/ContextApi';

function Table() {
  const { data } = useContext(ContextApi);
  console.log(data);
  // const columnFilter = .filter((key) => key !== 'residents');
  return (
    <section>
      <table>
        <thead>
          <tr>
            {/* { columnFilter.map((item) => <th key={ item }>{ item }</th>) } */}
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
