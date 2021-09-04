import React, { useContext } from 'react';
import FilterContext from '../context/FilterContext';

function Table() {
  const { filters: { order: { column, sort } }, data: { tableHeadData },
    filteredList } = useContext(FilterContext);

  function orderString(a, b) {
    if (a[column] < b[column]) {
      const oneNegative = -1;
      return oneNegative;
    }
    if (a[column] > b[column]) {
      return 1;
    }
    return 0;
  }

  filteredList.sort((a, b) => {
    if (Number(a[column])) {
      return a[column] - b[column];
    }
    return orderString(a, b);
  });

  if (sort === 'DESC') {
    filteredList.reverse();
  }

  return (
    <table>
      <thead>
        <tr>
          { tableHeadData.map((dataColumn, dataIndex) => (
            <th key={ dataIndex }>{dataColumn}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        { filteredList.map((planet, planetIndex) => (
          <tr key={ planetIndex }>
            {tableHeadData.map((dataColumn, dataIndex) => {
              if (dataColumn === 'name') {
                return (
                  <td
                    key={ dataIndex }
                    data-testid="planet-name"
                  >
                    { planet[dataColumn]}
                  </td>);
              }
              if (dataColumn === 'films') {
                return (
                  <td
                    key={ dataIndex }
                    data-testid="planet-name"
                    className="films"
                  >
                    { planet[dataColumn].join(' ')}
                  </td>);
              }
              return <td key={ dataIndex }>{ planet[dataColumn]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
