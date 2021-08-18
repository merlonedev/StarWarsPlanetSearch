import React, { useState, useEffect } from 'react';
import getPlanets from './services/planetsApi';
import Table from './components/Table';
import AppContext from './context/AppContext';

function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getPlanets();
        const { results } = await response.json();
        results.forEach((planet) => delete planet.residents);
        setPlanets(results);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const contextValue = {
    planets,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      <Table />
    </AppContext.Provider>
  );
}

export default App;
