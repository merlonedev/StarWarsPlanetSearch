import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import appContext from './appContext';
import planetApi from '../services/planetsApi';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPlanetApi = async () => {
      const apiItens = await planetApi();
      setData(apiItens);
    };
    getPlanetApi();
  }, []);

  const contextValue = { data };

  return (
    <appContext.Provider value={ contextValue }>
      {children}
    </appContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
