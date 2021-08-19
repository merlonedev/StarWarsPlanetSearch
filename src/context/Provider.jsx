import React, { createContext } from 'react';
import PropTypes from 'prop-types';
// import FetchHook from '../hook/FetchHook';
import SetGlobalFilter from '../hook/SetFilter';

export const MyContext = createContext();

export const ProviderContext = ({ children }) => {
  // const { data } = FetchHook();
  const { filteredData, SetFilter } = SetGlobalFilter();

  return (
    <MyContext.Provider value={ { filteredData, SetFilter } }>
      {children}
    </MyContext.Provider>

  );
};

ProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
};
