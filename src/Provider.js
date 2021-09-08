import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider(props) {
  const [state, setState] = useState({
    numericFilters: [],
    newPlanets: [],
    order: { column: 'name', sort: 'ASC' },
  });

  const handleSetState = (key, value) => {
    const newState = { ...state, [key]: value };
    setState(newState);
  };
  const { children } = props;
  const contextValue = { state, handleSetState };
  return (
    <MyContext.Provider value={ contextValue }>
      {
        children
      }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
