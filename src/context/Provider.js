import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

import fetchApi from '../services/fetchApi';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filter: {
      filterByName: {
        name: '',
      },
      filterByNumericalValues: [],
    },
  });

  useEffect(() => {
    const getPlanets = async () => {
      setData(await fetchApi());
    };
    getPlanets();
  }, []);

  const filterName = ({ target }) => {
    setFilters({
      ...filters,
      filter: { ...filters.filter,
        filterByName: {
          name: target.value,
        },
      },
    });
  };

  const filterNumeric = (newFilter) => setFilters(
    { ...filters,
      filter: { ...filters.filter,
        filterByNumericalValues: [...filters.filter.filterByNumericalValues, newFilter],
      },
    },
  );

  const context = {
    data,
    ...filters,
    setFilters,
    filterName,
    filterNumeric,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
