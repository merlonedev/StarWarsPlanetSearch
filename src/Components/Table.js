import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../Context/MyContext';

function Table() {
  const { data, filters } = useContext(MyContext);
  const { filterByName: { name } } = filters;
  const { filterByNumericValues } = filters;
  const nameLowerCase = name.toLowerCase();
  const dataFilteredByName = data.filter((planet) => planet.name.toLowerCase()
    .includes(nameLowerCase));
  const [filteredData, setFilteredData] = useState(dataFilteredByName);
  const tableHeads = Object.keys(data[0]);
  const filteredHeads = tableHeads.filter((head) => head !== 'residents');

  const compare = (whichColumn, comparisonType, number, array) => {
    switch (comparisonType) {
    case 'maior que':
      return array.filter((information) => Number(information[whichColumn]) > number);
    case 'menor que':
      return array.filter((information) => Number(information[whichColumn]) < number);
    case 'igual a':
      return array.filter((information) => information[whichColumn] === number);
    default:
      return array;
    }
  };

  // Utilização do NumberConstructor feita com base na dica da colega Adriana Biberg

  useEffect(() => {
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      const filtered = compare(column, comparison, value, filteredData);
      setFilteredData(filtered);
      console.log(filterByNumericValues);
    });
  }, [filterByNumericValues]);

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
