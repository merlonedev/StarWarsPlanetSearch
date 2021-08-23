import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const Filters = () => {
  const { handleNameFilter, handleName, handleButtonSearch,
    columnFilter } = useContext(MyContext);
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
            {columnFilter.map((lin) => <option value={ lin } key={ lin }>{lin}</option>)}
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
