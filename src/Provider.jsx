import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const INITIAL_FILTERS = {
    filterByName: {
      name: '',
    },
  };
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [requisitionError, setRequisitionError] = useState(); //  Ainda não usei isto pois primeiro vou finalizar os requisitos e depois tratar o erro.
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

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
  };

  return (
    <AppContext.Provider value={ ContextValue }>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Provider;
