import React, { useState } from 'react';
import propTypes from 'prop-types';
import FilterContext from './FilterContext';

function FilterProvider({ children }) {
  const INITIAL_STATE = {
    filters: {
      filterByName: {
        name: '',
      },
    },
  };

  const [state, setName] = useState(INITIAL_STATE);
  const handleChangeName = ({ target: { value } }) => setName(
    { ...state,
      filters: { ...state.filters,
        filterByName: {
          name: value,
        },
      },
    },
  );

  return (
    <FilterContext.Provider value={ { ...state, handleChangeName } }>
      {children}
    </FilterContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: propTypes.oneOfType([propTypes.node,
    propTypes.arrayOf(propTypes.node)]).isRequired,
};

export default FilterProvider;
