import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const INITIAL_FILTERS = {
    filterByName: {
      name: undefined,
    },
  };
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [requisitionError, setRequisitionError] = useState(); //  Ainda não usei isto pois primeiro vou finalizar os requisitos e depois tratar o erro.
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [numericFilters, setNumericFilters] = useState([]);

  const ContextValue = {
    data,
    setData,
    headers,
    setHeaders,
    requisitionError,
    setRequisitionError,
    filters,
    setFilters,
    filteredPlanets,
    setFilteredPlanets,
    numericFilters,
    setNumericFilters,
  };

  return (
    <AppContext.Provider value={ ContextValue }>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Provider;
