import React, { createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import FetchHook from '../hook/FetchHook';
import SetGlobalFilter from '../hook/SetFilter';

export const MyContext = createContext();

export const ProviderContext = ({ children }) => {
  const { data } = FetchHook();
  const { filteredData, SetFilter, setFilterData, setFiltered,
    optionsfiltered, filters, removeFilter } = SetGlobalFilter();

  const order = (obj) => {
    setFiltered({ ...filters,
      order: {
        column: obj.column,
        sort: obj.sort,
      } });
  };

  useEffect(() => {
    if (filters.order.sort === 'ASC') {
      console.log(filters);
      const result = filteredData.sort((a, b) => a[filters.order.column] - b[filters.order.column]);
      console.log(result);
      setFilterData(result);
    }
  }, [filteredData, filters, filters.order, setFilterData]);

  return (
    <MyContext.Provider
      value={ { filteredData,
        SetFilter,
        order,
        optionsfiltered,
        filters,
        removeFilter,
        data } }
    >
      {children}
    </MyContext.Provider>

  );
};

ProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
};
