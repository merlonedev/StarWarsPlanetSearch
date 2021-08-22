import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Criação do AppContext
const AppContext = createContext();

// Criação do Provider
const Provider = ({ children }) => {
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'Name',
      sort: 'ASC',
    },
  });

  return (
    <AppContext.Provider value={ { filters, setFilters } }>
      {children}
    </AppContext.Provider>
  );
};

// Simplificação do uso posterior do useContext
const useGlobalState = () => React.useContext(AppContext);

export { Provider };
export { useGlobalState };

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.Object),
}.isRequired;
