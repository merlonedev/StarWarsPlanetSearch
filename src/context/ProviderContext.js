import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function ProviderContext({ children }) {
  const [planets, setPlanets] = useState([]);

  const contextValue = { planets, setPlanets };

  useEffect(() => {
    (async () => {
      const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(END_POINT).then((data) => data.json());
      setPlanets(results);
    })();
  }, []);

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>);
}

const { oneOfType, arrayOf, node } = PropTypes;

ProviderContext.propTypes = {
  children: oneOfType([arrayOf(node), node]),
};

ProviderContext.defaultProps = {
  children: '',
};

export default ProviderContext;
