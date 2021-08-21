import React, { useState } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';
import useData from '../hooks/useData';

function Provider({ children }) {
  const [data, infos, loading] = useData();
  const [name, setName] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState(0);

  const contextV = {
    data,
    infos,
    loading,
    filters: {
      filterByName: { name },
      filterByNumericValues: [{
        column,
        comparison,
        value,
      }],
    },
    setName,
    setColumn,
    setComparison,
    value,
    setValue,
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
