import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './SearchForm.css';

function SearchForm() {
  const {
    setInputName,
    filters,
    setNumValue,
    renderFilterByNumValues } = useContext(StarWarsContext);

  const handleChangeName = ({ target }) => {
    setInputName(target.value);
  };

  const handleChangeNumValue = ({ target }) => {
    const { filterByNumericValues } = filters;
    const newInput = target.name === 'value' ? +target.value : target.value;
    setNumValue({
      ...filterByNumericValues[0],
      [target.name]: newInput,
    });
  };

  return (
    <form>
      <label htmlFor="nameFilter">
        Filter by name:
        <input
          id="nameFilter"
          type="text"
          onChange={ (event) => handleChangeName(event) }
          data-testid="name-filter"
        />
      </label>
      <label htmlFor="columnFilter">
        Filter column:
        <select
          id="columnFilter"
          name="column"
          data-testid="column-filter"
          type="text"
          onChange={ (event) => handleChangeNumValue(event) }
        >
          <option value="">Choose column</option>
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
          name="comparison"
          data-testid="comparison-filter"
          type="text"
          onChange={ (event) => handleChangeNumValue(event) }
        >
          <option value="">Choose comparison</option>
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="valueFilter">
        Filter by value:
        <input
          id="valueFilter"
          name="value"
          type="number"
          data-testid="value-filter"
          onChange={ (event) => handleChangeNumValue(event) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ renderFilterByNumValues }
      >
        Add filter
      </button>
    </form>
  );
}

export default SearchForm;
