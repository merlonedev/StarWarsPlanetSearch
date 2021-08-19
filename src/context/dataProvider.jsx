import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dataContext from './dataContext';

function Provider({ children }) {
  const filterColumnTypes = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const [nameFilter, setNameFilter] = useState('');
  const [filterBy, setFilterBy] = useState([]);
  const [filterTags, setFilterTags] = useState(filterColumnTypes);

  const state = {
    filters: {
      filterByName: {
        name: nameFilter,
      },
      filterByNumericValues: filterBy,
    },
  };

  const contextValue = {
    state,
    setNameFilter,
    setFilterBy,
    filterBy,
    filterTags,
    setFilterTags,
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
