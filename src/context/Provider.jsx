import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MyContext = createContext();

export const ProviderContext = ({ children }) => {
  const [data, setData] = useState();

  const handleState = (value) => {
    setData(value);
  };

  const state = {
    data,
    handleState,
  };

  return (
    <MyContext.Provider value={ state }>
      {children}
    </MyContext.Provider>

  );
};

ProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
};
