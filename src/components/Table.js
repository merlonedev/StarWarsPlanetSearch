import React, { useContext } from 'react';
import FilterContext from '../context/FilterContext';

function Table() {
  const { filters: { order },
    data: { tableHeadData }, filteredList } = useContext(FilterContext);

  function orderString(a, b) {
    if (a[order.column] < b[order.column]) {
      const oneNegative = -1;
      return oneNegative;
    }
    if (a[order.column] > b[order.column]) {
      return 1;
    }
    return 0;
  }

  filteredList.sort((a, b) => {
    if (Number(a[order.column])) {
      return a[order.column] - b[order.column];
    }
    return orderString(a, b);
  });

  if (order.sort === 'DESC') {
    filteredList.reverse();
  }

  const tableHead = () => (
    <thead>
      <tr>
        { tableHeadData.map((column, index) => (
          <th key={ index }>{column}</th>
        ))}
      </tr>
    </thead>
  );

  return (
    <table>
      { tableHead() }
      <tbody>
        { filteredList.map((planet, index) => (
          <tr key={ index }>
            {tableHeadData.map((column, dataindex) => {
              if (column === 'name') {
                return (
                  <td
                    key={ dataindex }
                    data-testid="planet-name"
                  >
                    { planet[column]}
                  </td>);
              }
              return <td key={ dataindex }>{ planet[column]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
