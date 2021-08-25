import React from 'react';
import contextApp from './contextApp';
import PropTypes from 'prop-types';

function Provider({ children }) {
  const [data, setData] = UseState([]);
  const contextValue = {
    data,
    setData,
  };

  return (
    <contextApp.Provider value={ contextValue }>
      {children}
    </contextApp.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
