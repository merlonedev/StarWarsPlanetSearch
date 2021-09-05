import React, { useContext } from 'react';

import { FiltersContext } from '../context';

const comparisonOptions = ['', 'maior que', 'menor que', 'igual a'];

function FilterByComparison() {
  const { filters } = useContext(FiltersContext);
  const { filterByNumericValues } = filters;

  return (
    <form>
      {/* <label>
          Pick your favorite flavor: */}
      <select
        data-testid="comparison-filter"
        value={ filterByNumericValues.comparison }
        onChange={ ({ target }) => filterByNumericValues
          .setNumericValuesFilter({
            ...filterByNumericValues,
            comparison: target.value,
          }) }
      >
        {comparisonOptions.map((comparison) => (
          <option key={ comparison } value={ comparison }>
            {comparison}
          </option>
        ))}
      </select>
      {/* </label> */}
    </form>
  );
}

export default FilterByComparison;
