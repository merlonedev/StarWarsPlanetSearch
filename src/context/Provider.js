import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';
import { requestApi, requestKeysApi } from '../services/requestApi';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [key, setKeys] = useState([]);
  const [result, setResult] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [{}],
  });
  const [filtrados, setFiltrados] = useState([]);

  const context = {
    data,
    setData,
    key,
    setKeys,
    result,
    setResult,
    filters,
    setFilters,
    filtrados,
    setFiltrados,
  };

  useEffect(() => {
    const getKeys = async () => {
      const response = await requestKeysApi();
      setKeys(response);
    };

    getKeys();
  }, []);

  useEffect(() => {
    const getItem = async () => {
      const request = await requestApi();
      setData(request);
    };

    getItem();
  }, []);

  return (
    <AppContext.Provider value={ context }>
      { children }
    </AppContext.Provider>
  );
};

Provider.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

export default Provider;
