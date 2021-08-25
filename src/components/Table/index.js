import React, { useContext, useState, useEffect, useCallback } from 'react';

import PlanetsContext from '../../context/PlanetsContext/PlanetsContext';

const Table = () => {
  const { data, filters, filteredData, setFilteredData } = useContext(PlanetsContext);
  const [tableHeader, setTableHeader] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      const tableHeaderArr = Object.keys(data[0]);
      setTableHeader(tableHeaderArr);
    }
  }, [data]);

  const filterComparison = useCallback(() => {
    const update = {
      'maior que': (column, value) => {
        setFilteredData(data.filter((e) => +e[column] > +value));
      },
      'menor que': (column, value) => {
        setFilteredData(data.filter((e) => +e[column] < +value));
      },
      'igual a': (column, value) => {
        setFilteredData(data.filter((e) => +e[column] === +value));
      },
    };
    filters.filterByNumericValues
      .forEach(({ column, value, comparison }) => update[comparison](column, value));
  }, [data, filters.filterByNumericValues, setFilteredData]);

  useEffect(() => {
    if (data.length && filters.filterByNumericValues.length === 0) {
      const newArr = data.filter(({ name }) => name.toLowerCase()
        .includes(filters.filterByName.toLowerCase()));
      setFilteredData(newArr);
    }
  }, [data, filters.filterByName, filters.filterByNumericValues.length, setFilteredData]);

  useEffect(() => {
    filterComparison();
  }, [filterComparison]);

  return (
    <table>
      <thead>
        <tr>
          {
            tableHeader.map((header) => <th key={ header }>{header}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          filteredData && filteredData.map((planet) => (
            <tr key={ planet.name }>
              {
                Object.values(planet)
                  .map((feature) => (<td key={ feature }>{feature}</td>))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default Table;
