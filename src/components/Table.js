import React, { useContext } from 'react';
import Context from '../context/context';

function Table() {
  const { globalState: { data, filterByName } } = useContext(Context);

  const dataTable = data.results
    .filter(({ name: planet }) => planet.includes(filterByName));

  const makeDataTable = () => {
    const headerFields = Object.keys(data.results[0])
      .filter((info) => info !== 'residents');
    const tableHeader = headerFields
      .map((headerText) => (headerText.replace('_', ' ')).toUpperCase());
    // const formatter = new Intl.NumberFormat('en-US', {
    //   maximumFractionDigits: 2,
    //   minimumFractionDigits: 2,
    // });
    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {tableHeader.map((head, i) => <th key={ i }>{head}</th>)}
            </tr>
          </thead>
          <tbody>
            { dataTable.map((planetData, i) => (
              <tr key={ i }>
                { headerFields.map((field, j) => (
                  <td key={ String(i) + String(j) }>{ planetData[field] }</td>))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <>
      {makeDataTable()}
    </>
  );
}

export default Table;
