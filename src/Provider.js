import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

function Provider({ children, value }) {
  return (
    <Context.Provider { ...{ value } }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
  value: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Provider;
