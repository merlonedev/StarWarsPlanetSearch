import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from '.';
import usePlanets from '../hooks/usePlanets';

function Provider({ children }) {
  const [planets, setPlanetsURL] = usePlanets();
  const [name, setName] = useState('');
  const contextValue = {
    planets,
    setPlanetsURL,
    setName,
    filters: {
      filterByName: {
        name,
      },
    },
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
