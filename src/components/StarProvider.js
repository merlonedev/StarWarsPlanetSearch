import React from 'react';
import { arrayOf, node } from 'prop-types';
import StarContext from '../context/StarContext';
import usePlanets from '../hooks/usePlanets';

function StarProvider({ children }) {
  const [planets] = usePlanets();

  const contextValue = {
    planets,
  };
  return (
    <StarContext.Provider value={ contextValue }>
      {children}
    </StarContext.Provider>
  );
}

export default StarProvider;

StarProvider.propTypes = {
  children: arrayOf(node).isRequired,
};
