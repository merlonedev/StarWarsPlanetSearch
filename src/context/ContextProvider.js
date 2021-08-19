import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { columns } from '../utils/data';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [filterByNumericValue, setFilterByNumericValue] = useState([]);
  const [columnsOptions, setColumnsOptions] = useState(columns);
  const [order, setOrder] = useState({ column: 'name', sort: 'ASC' });

  useEffect(() => {
    const fetchApi = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(endpoint);
      const result = await response.json();
      result.results.forEach((planet) => {
        delete planet.residents;
      });
      setData(result.results);
    };
    fetchApi();
  }, []);

  useEffect(() => {
    if (filterByNumericValue.length > 0) {
      let filteredColumns = [...columns];
      filterByNumericValue.forEach(({ column }) => {
        filteredColumns = filteredColumns.filter((item) => item !== column);
      });
      setColumnsOptions(filteredColumns);
    }
  }, [filterByNumericValue]);

  const context = {
    setData,
    setName,
    setFilterByNumericValue,
    setColumnsOptions,
    setOrder,
    data,
    columns: columnsOptions,
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValue,
      order,
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
