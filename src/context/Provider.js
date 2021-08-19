import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function Provider(props) {
  const [state, setState] = useState({ data: '' });

  const handleSetState = (value) => {
    const newState = { ...state, data: value };
    setState(newState);
  };

  const { children } = props;
  const contextValue = { state, handleSetState };
  return (
    <PlanetsContext.Provider value={ contextValue }>
      {
        children
      }
    </PlanetsContext.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.shape.isRequired,
};
export default Provider;
