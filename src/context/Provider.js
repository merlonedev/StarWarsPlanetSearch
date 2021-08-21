import React, { useState } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';
import useData from '../hooks/useData';

function Provider({ children }) {
  const [data, infos, loading] = useData();
  const [name, setName] = useState('');

  const contextV = {
    data,
    infos,
    loading,
    filters: { filterByName: { name } },
    setName,
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
