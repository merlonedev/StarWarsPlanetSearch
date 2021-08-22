// vitals
import React, { useContext, useState } from 'react';
// context
import myContext from '../context/myContext';

function Form() {
  const { filters, setFilters, globalOptions, setOptions } = useContext(myContext);
  const [localFilters, setLocalFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '100000',
  });

  const comparisonOptions = ['maior que', 'menor que', 'igual a'];

  function saveChange({ target }) {
    const { value, name } = target;
    setLocalFilters({
      ...localFilters,
      [name]: value,
    });
  }

  function handleChange({ target }) {
    const { value } = target;
    setFilters({ ...filters, filterByName: value });
  }

  function sendChanges() {
    setFilters({
      ...filters,
      filterByNumericValues:
        [...filters.filterByNumericValues, localFilters],
    });

    setOptions(globalOptions.filter((removed) => removed !== localFilters.column));
  }

  return (
    <>
      <input type="text" data-testid="name-filter" onChange={ handleChange } />
      <form>
        <select data-testid="column-filter" name="column" onChange={ saveChange }>
          {globalOptions.map((option) => (
            <option key={ option } value={ option }>{option}</option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ saveChange }
        >
          {comparisonOptions.map((compariosonOption) => (
            <option key={ compariosonOption } value={ compariosonOption }>
              {compariosonOption}
            </option>
          ))}
        </select>
        <input
          data-testid="value-filter"
          type="number"
          name="value"
          onChange={ saveChange }
        />
        <button data-testid="button-filter" type="button" onClick={ sendChanges }>
          Filtrar
        </button>
      </form>
    </>
  );
}

export default Form;
