import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from '.';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [filters, setFilters] = useState([]);
  const [order, setOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });

  const handleSetFilters = (filter, newFilter) => (
    newFilter
      ? setFilters(filter)
      : setFilters([...filters, filter]));

  const handleSortPlanets = () => {

  };

  const contextValue = {
    data: {
      planets,
    },
    setOrder,
    handleSortPlanets,
    setPlanets,
    setName,
    handleSetFilters,
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues: filters,
      order,
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
