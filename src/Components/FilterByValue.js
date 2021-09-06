import React, { useContext } from 'react';

import { FiltersContext } from '../context';

function FilterByNumericValues() {
  const { filters } = useContext(FiltersContext);
  const { setValue, tempValue, setTempValue } = filters;

  return (
    <form>
      <label htmlFor="value">
        Value:
        <input
          data-testid="name-filter"
          id="value"
          type="number"
          value={ tempValue }
          onChange={ ({ target }) => setTempValue(target.value) }
          onBlur={ ({ target }) => setValue(target.value) }
        />
      </label>
    </form>
  );
}

export default FilterByNumericValues;
