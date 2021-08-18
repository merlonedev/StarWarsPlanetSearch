import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FetchHook from '../hook/FetchHook';

export const MyContext = createContext();

export const ProviderContext = ({ children }) => {
  const [data, setData] = useState();

  const setFetch = async () => {
    const result = await FetchHook();
    setData(result);
  };

  useEffect(() => {
    setFetch();
  }, []);

  return (
    <MyContext.Provider value={ { data } }>
      {children}
    </MyContext.Provider>

  );
};

ProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
};
