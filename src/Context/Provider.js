import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: 0,
      },
    ],
  });
  const contextValue = {
    data,
    setData,
    filters,
    setFilters,
  };

  return (
    <SWContext.Provider value={ contextValue }>
      {children}
    </SWContext.Provider>
  );
}

// Proptype para children vista no link https://bit.ly/3kbmWf0

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
