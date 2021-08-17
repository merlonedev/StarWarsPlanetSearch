import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import usePlanets from '../hooks/usePlanets';

export default function Provider({ children }) {
  const [data, loading] = usePlanets();

  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  const contextValue = {
    data,
    loading,
    filters,
    setFilters,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(Symbol).isRequired,
};
