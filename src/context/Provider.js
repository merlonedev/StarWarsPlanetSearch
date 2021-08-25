import React, { useEffect, useState } from 'react';
import contextApp from './contextApp';
import PropTypes from 'prop-types';
import { searchPlanets } from '../services';

function Provider({ children }) {
  const [data, setData] = UseState([]);
  const contextValue = {
    data,
    setData,
  };

  UseEffect(() => {
    const GetPlanets = async () => {
      const result = await searchPlanets();
      setData(result);
    };

    GetPlanets();
  }, []);

  return (
    <contextApp.Provider value={ contextValue }>
      {children}
    </contextApp.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
