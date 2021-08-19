import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const filters = {
    filterByName: { name: '' },
  };

  const data = [];

  const [state, setState] = useState({ data, filters });

  const handleSetState = (key, value) => {
    const newState = { ...state, [key]: value };
    setState(newState);
  };

  const contextValue = { state, handleSetState };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
