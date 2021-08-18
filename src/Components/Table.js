import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

function Table() {
  const { data } = useContext(MyContext);
  const tableHeads = Object.keys(data[0]);
  const filteredHeads = tableHeads.filter((head) => head !== 'residents');

  return (
    <table>
      <thead>
        <tr>
          { filteredHeads.map((filteredHead) => (
            <th key={ filteredHead }>
              { filteredHead }
            </th>)) }
        </tr>
      </thead>
      <tbody>
        { data.map((planet) => (
          <tr key={ planet.name }>
            { Object.entries(planet).filter((entry) => entry[0] !== 'residents')
              .map((filteredEntry) => (
                <td key={ filteredEntry[1] }>{ filteredEntry[1] }</td>
              )) }
          </tr>)) }
      </tbody>
    </table>
  );
}

export default Table;
