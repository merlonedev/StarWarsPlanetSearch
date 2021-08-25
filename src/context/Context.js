import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/api';

const Context = createContext();

function Provider({ children }) {
  const [planetsInfo, setPlanetsInfo] = useState([]);
  const [inputName, setInputName] = useState('');
  const [inputNumeric, setInputNumeric] = useState();
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  useEffect(() => {
    const fetchPlanetsInfo = async () => {
      const results = await fetchPlanets();
      setPlanetsInfo(results);
    };
    fetchPlanetsInfo();
  }, []);

  useEffect(() => {
    setFilters({
      ...filters,
      filterByName: {
        name: inputName,
      },
    });
  }, [inputName]);

  useEffect(() => {
    if (planetsInfo.length > 0) {
      const { column, comparison, value } = inputNumeric;
      const { filterByNumericValues } = filters;

      setFilters({
        ...filters,
        filterByNumericValues: [
          ...filterByNumericValues,
          {
            column,
            comparison,
            value,
          },
        ],
      });
    }
  }, [inputNumeric]);

  const context = {
    planetsInfo,
    inputName,
    setInputName,
    inputNumeric,
    setInputNumeric,
    filters,
    setFilters,
  };

  return (
    <Context.Provider value={ context }>
      { children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired,
};

export { Context, Provider };
