import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function Provider(props) {
  const [state, setState] = useState({
    data: '',
    filters: {
      filterByName: {
        name: '',
      },
      filterByID: {
        teste: '',
      },
    },
  });

  const handleSetState = (key, value) => {
    const newState = { ...state, [key]: value };
    setState(newState);
  };

  const handleSetName = (value) => {
    const newState = { ...state,
      filters: {
        ...state.filters,
        filterByName: {
          name: value,
        },
      },
    };
    setState(newState);
  };

  const { children } = props;
  const contextValue = { state, handleSetState, handleSetName };
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
