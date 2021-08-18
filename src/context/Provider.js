import PropTypes from 'prop-types';
import React from 'react';
import SWContext from './Context';

function SWProvider({ children }) {
  const context = {};

  return (
    <SWContext.Provider value={ context }>
      {children}
    </SWContext.Provider>
  );
}
SWProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SWProvider;
