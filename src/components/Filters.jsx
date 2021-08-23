import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const Filters = () => {
  const { handleNameFilter, handleName, handleButtonSearch } = useContext(MyContext);
  return (
    <header>
      <input type="text" data-testid="name-filter" onChange={ handleNameFilter } />
      <div>
        <label htmlFor="column">
          <select
            name="column"
            id="column"
            data-testid="column-filter"
            onChange={ handleName }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
        <label htmlFor="comparison">
          <select
            name="comparison"
            id="comparison"
            data-testid="comparison-filter"
            onChange={ handleName }
          >
            <option value="maior que">maior que</option>
            <option value="igual a">igual a</option>
            <option value="menor que">menor que</option>
          </select>
        </label>
        <input
          type="number"
          data-testid="value-filter"
          name="value"
          onChange={ handleName }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleButtonSearch }
        >
          Filtrar
        </button>
      </div>
    </header>
  );
};

export default Filters;
