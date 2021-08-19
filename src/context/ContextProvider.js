import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from '.';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [filters, setFilters] = useState([]);

  const handleSetFilters = (filter) => {
    setFilters([...filters, filter]);
  };
  const contextValue = {
    data: {
      planets,
    },
    setPlanets,
    setName,
    handleSetFilters,
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues: filters,
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
