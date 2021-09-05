import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { FiltersContext } from '..';

function FiltersProvider({ children }) {
  const [filterByName, setNameFilter] = useState({ name: '' });
  const [filterByNumericValues, setNumericValuesFilter] = useState(
    { column: '', comparison: '', value: 0 },
  );
  const [isFilterActive, setIsFilterActive] = useState(false);

  const contextValue = {
    filters: {
      filterByName: {
        name: filterByName.name,
        setNameFilter,
      },
      filterByNumericValues: {
        column: filterByNumericValues.column,
        comparison: filterByNumericValues.comparison,
        value: filterByNumericValues.value,
        setNumericValuesFilter,
      },
      isFilterActive,
      setIsFilterActive,
    },
  };

  return (
    <FiltersContext.Provider value={ contextValue }>
      {children}
    </FiltersContext.Provider>
  );
}

FiltersProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default FiltersProvider;
