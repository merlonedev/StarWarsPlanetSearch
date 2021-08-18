import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FetchHook from '../hook/FetchHook';

export const MyContext = createContext();

export const ProviderContext = ({ children }) => {
  const [data, setData] = useState();
  const [filteredData, setFilterData] = useState();
  const [filters, setFiltered] = useState();

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

  const SetFilter = ({ name, value }) => {
    setFiltered({ ...filters, filterByName: { [name]: value } });
    console.log(filters);
  };

  const setFetch = async () => {
    const result = await FetchHook();
    setData(result);
    console.log(result);
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
