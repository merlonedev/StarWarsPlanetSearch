import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function ContextProvider({ children }) {
  const filters = {
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
    },
  };

  const [planets, setPlanets] = useState([]);
  const [filtersState, setFiltersState] = useState(filters);

  const contextValue = {
    planets,
    setPlanets,
    filtersState,
    setFiltersState,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
