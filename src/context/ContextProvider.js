import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from '.';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [filters, setFilters] = useState(
    {
      column: null,
      comparison: null,
      value: null,
    },
  );
  const contextValue = {
    data: {
      planets,
    },
    setPlanets,
    setName,
    setFilters,
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues: {
        column: filters.column,
        comparison: filters.comparison,
        value: filters.value,
      },
    },
  };
  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
