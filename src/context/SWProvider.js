import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getApi from '../services/getAPI';
import SWContext from './SWContext';

function SWProvider({ children }) {
  const [planets, setPlanets] = useState('');
  const [planetFilters, setPlanetFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const fetching = async () => {
    const request = await getApi();
    const newPlanets = Object.values(request.results).map((item) => {
      delete item.residents;
      return item;
    });
    setPlanets(newPlanets);
  };

  useEffect(() => {
    fetching();
  }, []);

  const valueContext = {
    planets,
    setPlanets,
    planetFilters,
    setPlanetFilters,
  };

  return (
    <SWContext.Provider value={ valueContext }>
      { children }
    </SWContext.Provider>
  );
}

SWProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default SWProvider;
