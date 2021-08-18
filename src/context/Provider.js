import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';

const INITIAL_FILTERS = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [availableFilters, setAvailableFilters] = useState(['um', 'dois']);
  const contextValue = {
    data,
    setData,
    filters,
    setFilters,
    availableFilters,
    setAvailableFilters,
  };

  const applyFilter = (results) => results;

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((stuff) => stuff.json());
      setData(applyFilter(results));
    };
    getPlanets();
    console.log('mudou os filtros');
  }, [filters]);

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;
