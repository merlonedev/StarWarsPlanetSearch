import React, { useState, useEffect } from 'react';
import AppContext from '../context/AppContext';

function Provider({ children }) {
  const [data, setData] = useState();

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint)
        .then((response) => response.json());
      setData(results);
    };
    getPlanets();
  }, []);

  return (
    <AppContext.Provider value={ { data } }>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
