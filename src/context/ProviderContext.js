import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function ProviderContext({ children }) {
  const [planets, setPlanets] = useState([]);

  const contextValue = { planets, setPlanets };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>);
}

const { oneOfType, arrayOf, node } = PropTypes;

ProviderContext.propTypes = {
  children: oneOfType([arrayOf(node), node]),
};

ProviderContext.defaultProps = {
  children: '',
};

export default ProviderContext;
