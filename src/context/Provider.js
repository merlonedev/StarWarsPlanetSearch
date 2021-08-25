import React, { useState, useEffect } from 'react';
import AppContext from './AppContext.js';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPlanets = () => {
      fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json())
        .then(({ results }) => setData(results));
    };
    fetchPlanets();
  }, []);

  const contextValue = {
    data,
  }

  return (
    <AppContext.Provider value={ contextValue }>
      {
        children
      }
    </AppContext.Provider>
  );
}

export default Provider; 