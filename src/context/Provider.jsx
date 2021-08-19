import React, { createContext } from 'react';
import PropTypes from 'prop-types';
// import FetchHook from '../hook/FetchHook';
import SetGlobalFilter from '../hook/SetFilter';

export const MyContext = createContext();

export const ProviderContext = ({ children }) => {
  // const { data } = FetchHook();
  const { filteredData, SetFilter,
    optionsfiltered, filters, removeFilter } = SetGlobalFilter();

  return (
    <MyContext.Provider
      value={ { filteredData,
        SetFilter,
        optionsfiltered,
        filters,
        removeFilter } }
    >
      {children}
    </MyContext.Provider>

  );
};

ProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
};
