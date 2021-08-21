import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchAPI from '../service/fetchAPI';

export default function ProviderStartWars({ children }) {
  const [planets, setPlanet] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetchAPI();
      setPlanet(results);
    };
    getPlanets();
  }, []);

  const context = {
    planets,
  };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

ProviderStartWars.propTypes = {
  children: PropTypes.node.isRequired,
};
