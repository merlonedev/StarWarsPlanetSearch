import React, { useContext } from 'react';
import Context from '../context/context';

function Table() {
  const { globalState } = useContext(Context);
  const { data, filterByName,
    numericFilter: { column, comparison, value },
    order: { column: columnToOrder, sort } } = globalState;
  const check = column && comparison && value;
  const typeToOrder = (Number.isNaN(Number(data.results[0][columnToOrder])))
    ? 'LET' : 'NUM';

  const comparisonFunction = {
    'maior que': (a, b) => a > b,
    'menor que': (a, b) => a < b,
    'igual a': (a, b) => a === b,
    '': () => true,
  };

  const ordenation = {
    ASCNUM: (a, b) => Number(a) - Number(b),
    DESCNUM: (a, b) => Number(b) - Number(a),
    ASCLET: (a, b) => a.localeCompare(b),
    DESCLET: (a, b) => b.localeCompare(a),
  };

  const dataTable = data.results
    .filter(({ name: planetName }) => planetName.includes(filterByName))
    .filter((planetInfo) => (
      !check || comparisonFunction[comparison](Number(planetInfo[column]), Number(value))
    )).sort((a, b) => ordenation[`${sort}${typeToOrder}`](a[columnToOrder], b[columnToOrder]));

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
