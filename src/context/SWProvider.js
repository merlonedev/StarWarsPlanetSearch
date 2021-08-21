import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';
import getApi from '../services/getAPI';

function SWProvider({ children }) {
  const [planets, setPlanets] = useState('');

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

  const valueContext = { planets, setPlanets };

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
