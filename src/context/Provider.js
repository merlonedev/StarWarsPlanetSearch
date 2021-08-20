import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

import fetchApi from '../services/fetchApi';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    allFilters: {
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
      allFilters: { ...filters.allFilters,
        filterByName: {
          name: target.value,
        },
      },
    });
  };

  const filterNumeric = (newFilter) => setFilters(
    { ...filters,
      allFilters: { ...filters.allFilters,
        filterByNumericalValues:
        [...filters.allFilters.filterByNumericalValues, newFilter],
      },
    },
  );

  const context = {
    data,
    ...filters,
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
