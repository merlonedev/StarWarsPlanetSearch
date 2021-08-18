import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './Components/Table';
import MyContext from './Context/MyContext';

function App() {
  const [data, setData] = useState([]);
  const contextValue = {
    data,
  };

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((planets) => planets.json());
      setData(results);
    };

    getPlanets();
  }, []);

  return (
    <MyContext.Provider value={ contextValue }>
      { (contextValue.data.length > 0) && <Table /> }
    </MyContext.Provider>
  );
}

export default App;
