import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dataContext from './dataContext';

function Provider({ children }) {
  const filterColumnTypes = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const initialOrder = {
    columnOrder: 'name',
    sort: 'ASC',
  };

  const [nameFilter, setNameFilter] = useState('');
  const [filterBy, setFilterBy] = useState([]);
  const [filterTags, setFilterTags] = useState(filterColumnTypes);
  const [orderTag, setOrderTag] = useState(initialOrder);

  const state = {
    filters: {
      filterByName: {
        name: nameFilter,
      },
      filterByNumericValues: filterBy,
      order: orderTag,
    },
  };

  const contextValue = {
    state,
    setNameFilter,
    setFilterBy,
    filterBy,
    filterTags,
    setFilterTags,
    setOrderTag,
  };

  return (
    <dataContext.Provider value={ contextValue }>
      {children}
    </dataContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
