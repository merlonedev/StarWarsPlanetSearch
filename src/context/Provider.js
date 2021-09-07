// Resolução com o apoio do colega Nikolas Silva

import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const PlanetContext = createContext({});

export const useProvider = () => React.useContext(PlanetContext);

export const PlanetProvider = (props) => {
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  const { children } = props;
  return (
    <PlanetContext.Provider value={ { filters, setFilters } }>
      {children}
    </PlanetContext.Provider>
  );
};

PlanetProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.Object),
}.isRequired;
