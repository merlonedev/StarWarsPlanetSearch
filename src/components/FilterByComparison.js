import React, { useContext } from 'react';

import { FiltersContext } from '../context';

function FilterByComparison() {
  const { filters } = useContext(FiltersContext);
  const { comparison, setComparison, comparisonOptions } = filters;

  return (
    <form>
      <label
        htmlFor="comparison-filter"
      >
        Comparison:
        <select
          id="comparison-filter"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ ({ target }) => {
            setComparison(target.value);
          } }
        >
          {comparisonOptions.map((comparisonOption) => (
            <option key={ comparisonOption } value={ comparisonOption }>
              {comparisonOption}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
}

export default FilterByComparison;
