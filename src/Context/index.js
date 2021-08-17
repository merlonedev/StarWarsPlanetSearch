import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

export default function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [{ column: '', comparison: '', value: '' }],
  });

  useEffect(() => {
    const getPlanets = async () => {
      const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const fetching = await fetch(PLANETS_URL);
      const { results } = await fetching.json();
      setData(results);
    };
    getPlanets();
  }, []);

  const handleNameFilter = ({ target: { value } }) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      filterByName: { name: value },
    }));
  };

  const handleFilterByNumeric = ({ column, comparison, value }) => {
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

  const contextValue = {
    data,
    filters,
    handleNameFilter,
    handleFilterByNumeric,
  };
  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
