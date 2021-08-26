import React, { useState, useEffect } from 'react';
import SWContext from './Context';

// eslint-disable-next-line react/prop-types
function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [name, setFilterName] = useState('');
  const [numericFilter, setFilters] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((data) => data.json());
      setPlanets(results.filter((resp) => delete resp.residents));
    };
    getPlanets();
  }, []);

  const contextValue = {
    planets,
    filters: {
      filterName: {
        name,
      },
      numericFilter,
    },
    setFilterName,
    setFilters,
  };

  return (
    <SWContext.Provider value={ contextValue }>
      {children}
    </SWContext.Provider>
  );
}

export default Provider;
