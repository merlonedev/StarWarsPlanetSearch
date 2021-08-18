import React from 'react';
import PropTypes from 'prop-types';
import useFetch from 'react-fetch-hook';
import Context from './Context';

function Provider({ children }) {
  const { isLoading, data = { results: [] } } = useFetch('https://swapi-trybe.herokuapp.com/api/planets/');
  data.results.forEach((planet) => delete planet.residents);

  const context = {
    isLoading,
    data: data.results,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
