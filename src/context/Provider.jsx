import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './Context';

export default function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const INITIAL_STATE = { planets, setPlanets };
  return (
    <AppContext.Provider value={ INITIAL_STATE }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
