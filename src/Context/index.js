import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

export default function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });
  const [order, setOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const getPlanets = async () => {
      try {
        const fetching = await fetch(PLANETS_URL);
        const { results } = await fetching.json();
        setData(results);
      } catch (error) {
        setApiError(true);
      }
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
    setFilters((prevFilters) => ({
      ...prevFilters,
      filterByNumericValues: [
        ...prevFilters.filterByNumericValues,
        { column, comparison, value },
      ],
    }));
  };

  const handleRemoveFilter = (filterName) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      filterByNumericValues: prevFilters.filterByNumericValues
        .filter(({ column }) => column !== filterName),
    }));
  };

  const handleOrder = (orderFilter) => {
    setOrder((prevOrder) => ({ ...prevOrder, ...orderFilter }));
  };

  const contextValue = {
    data,
    filters,
    order,
    apiError,
    handleNameFilter,
    handleFilterByNumeric,
    handleRemoveFilter,
    handleOrder,
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
