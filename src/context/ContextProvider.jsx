import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '.';

// prettier-ignore
export default function ContextProvider({ children }) {
  const [filters, setFilters] = useState({
    filterByName: '',
    filterByNumericValues: [
      {
        column: 'orbital_period',
        comparison: 'maior que',
        value: '0',
      },
    ],
  });
  const [selectedFilters, setSelectedFilters] = useState([]);

  return (
    <StarWarsContext.Provider
      value={ { filters, selectedFilters, setFilters, setSelectedFilters } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
