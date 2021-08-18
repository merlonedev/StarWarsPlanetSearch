import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './Components/Table';
import MyContext from './Context/MyContext';

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const contextValue = {
    data,
    filters: {
      filterByName: {
        name,
      },
    },
  };

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((planets) => planets.json());
      setData(results);
    };

    getPlanets();
  }, []);

  const handleNameChange = ({ target }) => {
    setName(target.value);
  };

  return (
    <MyContext.Provider value={ contextValue }>
      <main>
        <input type="text" data-testid="name-filter" onChange={ handleNameChange } />
        { (contextValue.data.length > 0) && <Table /> }
      </main>
    </MyContext.Provider>
  );
}

export default App;
