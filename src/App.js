import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './Components/Table';
import MyContext from './Context/MyContext';

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [numberState, setNumberState] = useState({});
  const [numberFilter, setNumberFilter] = useState({});

  const contextValue = {
    data,
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues: [
        numberFilter,
      ],
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

  const handleNumbersChange = ({ target }) => {
    const { name: tag, value } = target;

    setNumberState({
      ...numberState,
      [tag]: value,
    });
  };

  const handleSendFilter = () => {
    setNumberFilter(numberState);
  };

  return (
    <MyContext.Provider value={ contextValue }>
      <main>
        <form>
          <input
            type="text"
            data-testid="name-filter"
            onChange={ handleNameChange }
            placeholder="Filtrar pelo nome"
          />
          <select
            data-testid="column-filter"
            name="column"
            onChange={ handleNumbersChange }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="rotation_period">rotation_period</option>
            <option value="diameter">diameter</option>
            <option value="surface_water">surface_water</option>
          </select>
          <select
            data-testid="comparison-filter"
            name="comparison"
            onChange={ handleNumbersChange }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
          <input
            type="number"
            data-testid="value-filter"
            name="value"
            onChange={ handleNumbersChange }
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={ handleSendFilter }
          >
            Filtrar
          </button>
        </form>
        { (contextValue.data.length > 0) && <Table /> }
      </main>
    </MyContext.Provider>
  );
}

export default App;
