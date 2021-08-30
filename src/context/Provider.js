import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import getPlanetsAPIInfo from '../services/planetsAPI';

function Provider({ children }) {
  const [planetsInfos, setPlanetsInfos] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [filteredPlanets, setfilteredPlanetes] = useState({ filterByName: { name: '' } });

  const getPlanetsInfo = async () => {
    const data = await getPlanetsAPIInfo();
    setPlanetsInfos(data);
    setIsFetching(false);
  };

  useEffect(() => {
    getPlanetsInfo();
  }, []);

  const filterPlanetByName = (input) => {
    setfilteredPlanetes({
      filterByName: {
        name: input,
      },
    });
  };

  const context = {
    planetsInfos,
    isFetching,
    filteredPlanets,
    filterPlanetByName,
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
