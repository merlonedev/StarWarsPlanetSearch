import React from 'react';
import PropTypes from 'prop-types';
import Context from '.';
import usePlanets from '../hooks/usePlanets';

function Provider({ children }) {
  const [planets, setPlanetsURL] = usePlanets();
  const contextValue = {
    planets,
    setPlanetsURL,
  };
  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
