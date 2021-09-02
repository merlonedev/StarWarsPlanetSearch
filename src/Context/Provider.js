import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: 0,
      },
    ],
  });

  return (
    <Context.Provider
      value={ {
        data,
        setData,
        filters,
        setFilters } }
    >
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default StarWarsProvider;
