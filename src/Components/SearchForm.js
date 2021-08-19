import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './SearchForm.css';

function SearchForm() {
  const { filterName } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    filterName(target.value);
  };

  return (
    <form>
      <label htmlFor="nameFilter">
        Filter by name:
        <input
          id="nameFilter"
          type="text"
          onChange={ (event) => handleChange(event) }
          data-testid="name-filter"
        />
      </label>
      <label htmlFor="columnFilter">
        Filter column:
        <select
          id="columnFilter"
          data-testid="column-filter"
          type="text"
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <label htmlFor="comparisonFilter">
        Filter comparison:
        <select
          id="comparisonFilter"
          data-testid="comparison-filter"
          type="text"
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="valueFilter">
        Filter by value:
        <input
          id="valueFilter"
          type="number"
          data-testid="value-filter"
        />
      </label>
      <button type="button" data-testid="button-filter">
        Add filter
      </button>
    </form>
  );
}

export default SearchForm;
