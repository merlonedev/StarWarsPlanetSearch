import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

function Provider({ children }) {
  const [data, setData] = useState();
  const [filterByName, setFilterByName] = useState({ name: '' });

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint)
        .then((response) => response.json());
      setData(results);
    };
    getPlanets();
  }, []);

  const filtroNome = ({ target }) => {
    setFilterByName({ name: target.value });
  };

  const contextValu = {
    data,
    filters: {
      filterByName,
    },
    functions: {
      filtroNome,
    },
  };

  return (
    <AppContext.Provider value={ { contextValu } }>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
