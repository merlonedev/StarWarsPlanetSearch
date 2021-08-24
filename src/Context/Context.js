import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import FetchApi from '../Helper/FetchApi';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState('');
  const [filter, setFilter] = useState('');
  const [newData, setNewData] = useState('');

  const filterName = (value) => {
    const planetFilter = newData.filter((item) => item.name.toLowerCase()
      .includes(value.toLowerCase()));
    if (planetFilter.length >= 1) {
      setData(planetFilter);
    }
  };

  const getAPI = async () => {
    const request = await FetchApi();
    const newArray = Object.values(request.results).map((item) => {
      delete item.residents;
      return item;
    });
    setData(newArray);
    setNewData(newArray);
  };

  const handleChange = ({ name, value }) => {
    setFilter({ ...filter, filterByName: { [name]: value } });
    filterName(value);
  };

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <Context.Provider value={ { data, setData, filter, handleChange } }>
      {children}
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
