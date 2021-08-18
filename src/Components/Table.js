import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

function Table() {
  const { data, filters } = useContext(MyContext);
  const { filterByName: { name } } = filters;
  const nameLowerCase = name.toLowerCase();
  const filteredData = data.filter((planet) => planet.name.toLowerCase()
    .includes(nameLowerCase));
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
        { filteredData.map((planet) => (
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
