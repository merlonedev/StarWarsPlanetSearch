import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider(props) {
  const [state, setState] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  const handleSetState = (key1, key2, value) => {
    const newState = { ...state, filters: { [key1]: { [key2]: value } } };
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
  children: PropTypes.element.isRequired,
};

export default Provider;
