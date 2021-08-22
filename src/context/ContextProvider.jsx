import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '.';

// prettier-ignore
export default function ContextProvider({ children }) {
  const [filters, setFilters] = useState({});

  return (
    <StarWarsContext.Provider value={ { filters, setFilters } }>
      {children}
    </StarWarsContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
