import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dataContext from './dataContext';

function Provider({ children }) {
  const [nameFilter, setNameFilter] = useState('');
  const [filterBy, setFilterBy] = useState([]);
  const state = {
    filters: {
      filterByName: {
        name: nameFilter,
      },
      filterByNumericValues: filterBy,
    },
  };

  const contextValue = {
    state,
    setNameFilter,
    setFilterBy,
    filterBy,
  };

  return (
    <dataContext.Provider value={ contextValue }>
      {children}
    </dataContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
