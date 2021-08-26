import React, { useEffect, useState } from 'react';
import contextApp from './contextApp';
import PropTypes from 'prop-types';
import searchPlanets from '../services/ApiPlanets';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const contextValue = {
    data,
    setData,
  };

  useEffect(() => {
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
