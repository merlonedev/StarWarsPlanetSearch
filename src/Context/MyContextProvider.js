import React, { useState } from 'react';
import MyContext from './Context';
import PropTypes from 'prop-types';


function Provider({ children }) {
  const [state, setState] = useState({
    filters: {
      filterByName: {
        name: '',
      }
    }
  }
  )
  const context = {
    state,
    setState,
  };

  return (
    <MyContext.Provider value={  }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
