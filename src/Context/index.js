import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MyContext = createContext();

export default function MyProvider({ children }) {
  const [data, setData] = useState([]);

  const contextValue = {
    data,
    setData,
  };
  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
