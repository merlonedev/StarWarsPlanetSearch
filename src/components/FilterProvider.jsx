import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { FiltersContext } from '../context';

function FilterProvider({ children }) {
  const [filterByName, setName] = useState('');

  const contextValue = {
    filters: {
      filterByName: {
        name: filterByName,
        setName,
      },
    },
  };

  return (
    <FiltersContext.Provider value={ contextValue }>
      {children}
    </FiltersContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default FilterProvider;
