import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [api, setApi] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(END_POINT).then((data) => data.json());
      setApi(results);
    };
    getApi();
  }, []);

  const context = {
    api,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
