import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import AppContext from './context/AppContext';

function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
      try {
        const { results } = await fetch(END_POINT).then((data) => data.json());
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
