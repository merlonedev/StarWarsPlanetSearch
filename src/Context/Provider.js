import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextApi from './ContextApi';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({ filterByName: { name: '' } });
  const contextValue = {
    data,
    setData,
    filter,
    setFilter,
  };

  return (
    <ContextApi.Provider value={ contextValue }>
      {children}
    </ContextApi.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
