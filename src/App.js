import React, { useEffect, useState } from 'react';
import './App.css';
import MyContext from './Context/Context';
import Table from './Components/Table';

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const planets = {
    data,
    filters: {
      filterByName: {
        name,
      },
    },
  };

  useEffect(() => {
    const getData = async () => {
      const planetsEndpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(planetsEndpoint).then((result) => result.json());
      setData(results);
    };
    getData();
  }, []);

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  return (
    <MyContext.Provider value={ planets }>
      <input
        type="text"
        placeholder="Nome do planeta"
        onChange={ handleChange }
        data-testid="name-filter"
      />
      { (data.length > 0 && <Table />) }
    </MyContext.Provider>
  );
}

export default App;
