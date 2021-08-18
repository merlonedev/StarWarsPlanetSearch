import React, { useEffect, useState } from 'react';
import Filters from './components/Filters';
import AppContext from './context/AppContext';

const App = () => {
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
      <Filters />
    </AppContext.Provider>
  );
};

export default App;
