import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '..';

const Provider = ({ children }) => {
  const [api, setApi] = useState([]);
  const [columns, setColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [filters, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  useEffect(() => {
    const getApi = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const negativeOne = -1;
      const { results } = await fetch(endpoint).then((data) => data.json());
      results.sort((a, b) => (a.name > b.name ? 1 : negativeOne));
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
    setData: setApi,
    filters,
    setFilter,
    handleFilter,
    columns,
    setColumns,
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
