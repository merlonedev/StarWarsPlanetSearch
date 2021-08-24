import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import FetchApi from '../Helper/FetchApi';

const INITIAL_STATE = { filterByName: { name: '' },
  filterByNumericValues: [
    {
      column: '',
      comparison: '',
      value: '',
    },
  ],
};

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState('');
  const [filter, setFilter] = useState(INITIAL_STATE);
  const [newData, setNewData] = useState('');

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

  useEffect(() => {
    if (data && filter) {
      setNewData(data.filter((item) => item.name.toLowerCase()
        .includes(filter.filterByName.name.toLowerCase())));
    } else {
      setNewData(data);
    }
  }, [data, filter]);

  useEffect(() => {
    const { column, comparison, value } = filter.filterByNumericValues[0];
    switch (comparison) {
    case 'maior que':
      setNewData(data
        .filter((e) => Number(e[column]) > value && e[column] !== 'unknown'));
      break;
    case 'igual a':
      setNewData(data
        .filter((e) => e[column] === value && e[column] !== 'unknown'));
      break;
    case 'menor que':
      setNewData(data
        .filter((e) => Number(e[column]) < value && e[column] !== 'unknown'));
      break;
    default: setNewData(data);
    }
  }, [data, filter.filterByNumericValues]);

  const handleChange = (event) => {
    if (event.target) {
      const { name, value } = event.target;
      setFilter({ ...filter, filterByName: { [name]: value } });
    } else {
      setFilter({ ...filter, ...event });
    }
  };

  return (
    <Context.Provider value={ { data, setData, filter, handleChange, newData } }>
      {children}
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
