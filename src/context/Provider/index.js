import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '..';

const Provider = ({ children }) => {
  const [api, setApi] = useState([]);
  const [filters, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  useEffect(() => {
    const getApi = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((data) => data.json());
      setApi(results);
    };
    getApi();
  }, []);

  const handleFilter = ({ target: { name, value } }) => {
    setFilter({
      ...filters,
      filters: {
        ...filters,
        filterByNumericValues:
        [filters.filters.filterByNumericValues, { [name]: value }],
      },
    });
  };

  const contextValue = {
    data: api,
    filters,
    setFilter,
    handleFilter,

  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Provider;
