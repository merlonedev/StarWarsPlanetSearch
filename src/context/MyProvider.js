import React, { useState } from 'react';
import propTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [state, setState] = useState('a');

  const hooks = {
    state, setState,
  };

  return (
    <MyContext.Provider value={ hooks }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.node.isRequired,
};

export default Provider;
