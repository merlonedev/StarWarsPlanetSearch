import React, { useState } from 'react';
import propTypes from 'prop-types';
import FilterContext from './FilterContext';

function FilterProvider({ children }) {
  const INITIAL_STATE = {
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
      order: {
        column: '',
        sort: '',
      },
    },
  };

  const [state, setState] = useState(INITIAL_STATE);
  const handleChangeName = ({ target: { value } }) => setState(
    { ...state,
      filters: { ...state.filters,
        filterByName: {
          name: value,
        },
      },
    },
  );

  const handleFilter = (newFilter) => setState(
    { ...state,
      filters: { ...state.filters,
        filterByNumericValues: [...state.filters.filterByNumericValues, newFilter],
      },
    },
  );

  const value = {
    ...state,
    handleChangeName,
    handleFilter,
  };

  return (
    <FilterContext.Provider value={ value }>
      {children}
    </FilterContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: propTypes.oneOfType([propTypes.node,
    propTypes.arrayOf(propTypes.node)]).isRequired,
};

export default FilterProvider;
