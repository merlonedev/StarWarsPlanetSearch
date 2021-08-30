import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import getPlanetsAPIInfo from '../services/planetsAPI';

function Provider({ children }) {
  const [planetsInfos, setPlanetsInfos] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const getPlanetsInfo = async () => {
    const data = await getPlanetsAPIInfo();
    setPlanetsInfos(data);
    setIsFetching(false);
  };

  useEffect(() => {
    getPlanetsInfo();
  }, []);

  const context = {
    planetsInfos,
    isFetching,
  };

  return (
    <AppContext.Provider value={ context }>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
