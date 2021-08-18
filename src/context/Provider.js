import PropTypes from 'prop-types';
import React, { useState } from 'react';
import StarContext from './StarContext';

function Provider({ children }) {
  const [data, setData] = useState([]);

  const context = {
    data,
  };

  return (
    <StarContext.Provider value={ context }>
      {children}
    </StarContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
