import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchAPI from '../services';
import MainContext from './MainContext';

function MainProvider({ children }) {
  const [data, setData] = useState({});
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  const handleFilterByName = ({ target: { value } }) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      filterByName: { name: value },
    }));
  };

  const handleFilterByNumericClick = ({ column, comparison, value }) => {
    setFilters((prevFilters) => {
      if (!prevFilters.filterByNumericValues[0].value) {
        return { ...prevFilters, filterByNumericValues: [{ column, comparison, value }] };
      }
      return { ...prevFilters,
        filterByNumericValues: [
          ...prevFilters.filterByNumericValues,
          { column, comparison, value },
        ],
      };
    });
  };

  useEffect(() => {
    const getPlanets = async () => {
      const response = await fetchAPI();
      setData(response);
    };
    getPlanets();
  }, []);

  const value = {
    data,
    setData,
    filters,
    setFilters,
    handleFilterByName,
    handleFilterByNumericClick,
  };

  return (
    <MainContext.Provider value={ value }>
      { children }
    </MainContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainProvider;
