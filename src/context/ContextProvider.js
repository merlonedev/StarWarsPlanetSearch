import React, { useMemo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { switchComparison, columns } from '../utils/data';

const Provider = ({ children }) => {
  const [fullData, setFullData] = useState([]);
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [filterByNumericValue, setFilterByNumericValue] = useState([]);
  const [columnsOptions, setColumnsOptions] = useState(columns);

  useEffect(() => {
    const fetchApi = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(endpoint);
      const result = await response.json();
      result.results.forEach((planet) => delete planet.residents);
      setFullData(result.results);
      setData(result.results);
    };
    fetchApi();
  }, []);

  const dataFilteredByName = useMemo(() => (
    fullData.filter(({ name: planetName }) => planetName
      .toLowerCase().includes(name.toLowerCase()))
  ), [fullData, name]);

  const dataFilteredByNumeric = useMemo(() => {
    if (filterByNumericValue.length > 0) {
      let filteredData = dataFilteredByName;
      filterByNumericValue.forEach(({ column, comparison, value }) => {
        filteredData = filteredData
          .filter((planet) => switchComparison(planet, column, comparison, value));
      });
      return filteredData;
    }
    return dataFilteredByName;
  }, [dataFilteredByName, filterByNumericValue]);

  useEffect(() => {
    if (filterByNumericValue.length > 0) {
      let filteredColumns = [...columns];
      filterByNumericValue.forEach(({ column }) => {
        filteredColumns = filteredColumns.filter((item) => item !== column);
      });
      setColumnsOptions(filteredColumns);
    }
  }, [filterByNumericValue]);

  useEffect(() => {
    setData(dataFilteredByNumeric);
  }, [dataFilteredByNumeric]);

  const context = {
    setData,
    setName,
    setFilterByNumericValue,
    setColumnsOptions,
    data,
    columns: columnsOptions,
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValue,
    },
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
