import React, { useState } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';
import useData from '../hooks/useData';

function Provider({ children }) {
  const [data, infos, loading] = useData();
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [{
      column: '',
      comparison: '',
      value: '',
    }],
  });

  const contextV = {
    data,
    infos,
    loading,
    filters,
    setFilters,
  };

  return (
    <myContext.Provider value={ contextV }>
      { children }
    </myContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
