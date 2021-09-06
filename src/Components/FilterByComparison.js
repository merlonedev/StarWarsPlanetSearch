import React, { useContext } from 'react';

import { FiltersContext } from '../context';

const comparisonOptions = ['', 'maior que', 'menor que', 'igual a'];

function FilterByComparison() {
  const { filters } = useContext(FiltersContext);
  const { comparison, setComparison } = filters;

  return (
    <form>
      {/* <label>
          Pick your favorite flavor: */}
      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ ({ target }) => setComparison(target.value) }
      >
        {comparisonOptions.map((comparisonOption) => (
          <option key={ comparisonOption } value={ comparisonOption }>
            {comparisonOption}
          </option>
        ))}
      </select>
      {/* </label> */}
    </form>
  );
}

export default FilterByComparison;
