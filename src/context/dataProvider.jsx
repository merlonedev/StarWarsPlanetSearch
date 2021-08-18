import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dataContext from './dataContext';

function Provider({ children }) {
  const [state, setState] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });
  const contextValue = {
    state,
    setState,
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
