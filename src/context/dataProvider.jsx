import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dataContext from './dataContext';

function Provider({ children }) {
  const [nameFilter, setNameFilter] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('>');
  const [value, setValue] = useState();
  const state = {
    filters: {
      filterByName: {
        name: nameFilter,
      },
      filterByNumericValues: {
        column,
        comparison,
        value,
      },
    },
  };

  const contextValue = {
    state,
    setNameFilter,
    setColumn,
    setComparison,
    setValue,
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
