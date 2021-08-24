import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import FetchApi from '../Helper/FetchApi';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState('');

  const getAPI = async () => {
    const request = await FetchApi();
    const newArray = Object.values(request.results).map((item) => {
      delete item.residents;
      return item;
    });
    setData(newArray);
  };

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <Context.Provider value={ { data, setData } }>
      {children}
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
