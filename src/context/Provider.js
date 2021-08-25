import React, { UseState } from 'react';
import contextapp from './contextApp';

function Provider({ children }) {
  const [data, setData] = UseState([]);
  const contextValue = {
    data,
    setData,
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
