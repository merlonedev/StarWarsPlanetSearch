import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FetchHook from '../hook/FetchHook';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [
    {
      column: '',
      comparison: '',
      value: '',
    },
  ],
};

export const MyContext = createContext();

export const ProviderContext = ({ children }) => {
  const [data, setData] = useState();
  const [filteredData, setFilterData] = useState();
  const [filters, setFiltered] = useState(INITIAL_STATE);

  useEffect(() => {
    if (data && filters) {
      const filtredList = data.filter((e) => (
        e.name.toLowerCase().includes(filters.filterByName.name.toLowerCase())
      ));
      setFilterData(filtredList);
    } else {
      setFilterData(data);
    }
  }, [data, filters]);

  const SetFilter = (target) => {
    if (target.name) {
      setFiltered({ ...filters, filterByName: { [target.name]: target.value } });
    } else {
      setFiltered({ ...filters, ...target });
    }
    console.log(filters);
  };

  const setFetch = async () => {
    const result = await FetchHook();
    setData(result);
  };

  useEffect(() => {
    setFetch();
  }, []);

  return (
    <MyContext.Provider value={ { filteredData, SetFilter } }>
      {children}
    </MyContext.Provider>

  );
};

ProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
};
