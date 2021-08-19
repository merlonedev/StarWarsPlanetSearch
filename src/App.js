import React, { useEffect, useState } from 'react';
import './App.css';
import MyContext from './Context/Context';
import Table from './Components/Table';

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [filterByNumericValues, setfilterByNumericValues] = useState([{
    column: 'diameter',
    comparison: 'maior que',
    value: 0 }]);

  const planets = {
    data,
    filters: {
      filterByName: { name },
      filterByNumericValues,
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

  const handleChangeName = ({ target }) => {
    setName(target.value);
  };

  const UpdatebyNumericValues = { column: 'diameter',
    comparison: 'maior que',
    value: 0 };

  const handleChangeOptions = ({ target }) => {
    UpdatebyNumericValues[target.name] = target.value;
  };

  const handleClick = () => {
    setfilterByNumericValues([UpdatebyNumericValues]);
    const deleteOption = document.getElementById(UpdatebyNumericValues.column);
    deleteOption.remove();
  };

  return (
    <MyContext.Provider value={ planets }>
      <input
        type="text"
        placeholder="Nome do planeta"
        onChange={ handleChangeName }
        data-testid="name-filter"
      />
      <select
        name="column"
        id="filtro-coluna"
        data-testid="column-filter"
        onChange={ handleChangeOptions }
      >
        <option id="diameter" value="diameter">diameter</option>
        <option id="population" value="population">population</option>
        <option id="orbital_period" value="orbital_period">orbital_period</option>
        <option id="rotation_period" value="rotation_period">rotation_period</option>
        <option id="surface_water" value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison"
        id="filtro-compara"
        onChange={ handleChangeOptions }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="value"
        onChange={ handleChangeOptions }
        data-testid="value-filter"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
      { (data.length > 0 && <Table />) }
    </MyContext.Provider>
  );
}

export default App;
