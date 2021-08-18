import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const [planets, setPlanets] = useState();

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(endpoint);
      const { results } = await response.json();
      setPlanets(results);
    };
    getPlanets();
  }, []);

  const contextValue = {
    data: planets,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppProvider;
