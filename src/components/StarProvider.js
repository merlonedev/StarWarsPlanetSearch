import React from 'react';
import { shape, string } from 'prop-types';
import StarContext from '../context/StarContext';

function StarProvider({ children }) {
  const contextValue = {
    key: 'value',
  };

  return (
    <StarContext value={ contextValue }>
      {children}
    </StarContext>
  );
}

export default StarProvider;

StarProvider.propTypes = {
  children: shape({
    innerHTML: string,
  }).isRequired,
};
