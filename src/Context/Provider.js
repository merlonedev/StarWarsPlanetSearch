import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextApi from './ContextApi';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: 0,
      },
    ],
  });

  const [options, setOptions] = useState({
    ORIGINAL_COLUMN_OPTIONS: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
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
    filter,
    setFilter,
    options,
    setOptions,
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
