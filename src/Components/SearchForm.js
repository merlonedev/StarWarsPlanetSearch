import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './SearchForm.css';

function SearchForm() {
  const {
    setInputName,
    filters,
    setNumValue,
    renderFilterByNumValues,
    columnOptions, comparisonOptions, handleOptions } = useContext(StarWarsContext);

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

  const handleClick = () => {
    handleOptions();
    renderFilterByNumValues();
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
          {columnOptions.map((item) => <option key={ item }>{item}</option>)}
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
          {comparisonOptions.map((item) => <option key={ item }>{item}</option>)}
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
        onClick={ handleClick }
      >
        Add filter
      </button>
    </form>
  );
}

export default SearchForm;
