import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filter() {
  const {
    handleSearch,
    handleSelect,
    filterTable,
    options } = useContext(StarWarsContext);

  return (
    <div>
      <input type="text" data-testid="name-filter" onChange={ handleSearch } />
      <div>
        <select
          id="filter-selected"
          name="column"
          data-testid="column-filter"
          onChange={ handleSelect }
        >
          { options.map((o) => <option key={ o }>{ o }</option>)}
        </select>
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ handleSelect }
        >
          <option>Selecionar</option>
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          name="value"
          type="number"
          data-testid="value-filter"
          onChange={ handleSelect }
        />
        <button
          type="button"
          onClick={ filterTable }
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </div>
    </div>
  );
}

export default Filter;
