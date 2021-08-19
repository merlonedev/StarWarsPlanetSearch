import React, { useMemo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { switchComparison, columns } from '../utils/data';

const Provider = ({ children }) => {
  const [fullData, setFullData] = useState([]);
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [filterByNumericValue, setFilterByNumericValue] = useState(null);
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
    if (filterByNumericValue) {
      const { column, comparison, value } = filterByNumericValue;
      return dataFilteredByName
        .filter((planet) => switchComparison(planet, column, comparison, value));
    }
    return dataFilteredByName;
  }, [dataFilteredByName, filterByNumericValue]);

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
