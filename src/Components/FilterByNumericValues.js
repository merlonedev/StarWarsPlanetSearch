import React, { useContext } from 'react';

import { FiltersContext } from '../context';

function FilterByNumericValues() {
  const { filters } = useContext(FiltersContext);
  const { filterByNumericValues } = filters;
  return (
    <form>
      <label htmlFor="amount">
        Amount:
        <input
          data-testid="name-filter"
          id="amount"
          type="number"
          value={ filterByNumericValues.value }
          onChange={ ({ target }) => filterByNumericValues
            .setNumericValuesFilter({ ...filterByNumericValues, value: target.value }) }
        />
      </label>
    </form>
  );
}

export default FilterByNumericValues;
