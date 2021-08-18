import React from 'react';
import PropTypes from 'prop-types';

import Context from './Context';
import usePlanets from '../hooks/usePlanets';
import useFilters from '../hooks/useFIlters';

function Provider({ children }) {
  const [planets, loading] = usePlanets();
  const [filters, updateFilters] = useFilters();

  const providerValue = {
    data: planets, loading, filters, updateFilters,
  };

  return (
    <Context.Provider value={ providerValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
