import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { switchComparison } from '../utils/data';

const Provider = ({ children }) => {
  const [fullData, setFullData] = useState([]);
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [filterByNumericValue, setFilterByNumericValue] = useState(null);

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

  const filterName = useCallback(() => {
    if (name !== '') {
      setData(fullData.filter(({ name: planetName }) => planetName
        .toLowerCase().includes(name.toLowerCase())));
    }
  }, [name, fullData]);

  const filterNumeric = useCallback(() => {
    const { column, comparison, value } = filterByNumericValue;
    setData(fullData
      .filter((planet) => switchComparison(planet, column, comparison, value)));
  }, [filterByNumericValue, fullData]);

  useEffect(() => {
    filterNumeric();
    filterName();
  }, [filterName, filterNumeric]);

  const context = {
    setData,
    setName,
    setFilterByNumericValue,
    data,
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
