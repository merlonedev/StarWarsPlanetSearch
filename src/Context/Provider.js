import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: 0,
      },
    ],
  });
  const [dropboxOptions, setDropboxOptions] = useState({
    COLUMN_OPTIONS: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
    COMPARISON_OPTIONS: ['maior que', 'menor que', 'igual a'],
  });

  const contextValue = {
    data,
    setData,
    filters,
    setFilters,
    dropboxOptions,
    setDropboxOptions,
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
