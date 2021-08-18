import React from 'react';
import PropTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';
import usePlanets from '../hooks/usePlanets';

function Provider({ children }) {
  const [planets, loading] = usePlanets();

  return (
    <PlanetsContext.Provider value={ { data: planets, loading } }>
      {children}
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
