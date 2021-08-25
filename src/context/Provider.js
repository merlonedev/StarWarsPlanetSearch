import React, { useState } from 'react';
import contextapp from './contextApp';

function Provider({ children }) {
  const [data, setData] = UseState([]);
  const [name, setName] = useState('');
  const contextValue = {
    data,
    setData,
    filters: {
      filterByName: {
        name,
        setName,
      },
    },
  };

  return (
    <contextapp.Provider value={ contextValue }>
      {children}
    </contextapp.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
