import React, { useContext } from 'react';

import { FiltersContext } from '../context';

const columnOptions = ['', 'population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

function FilterByColumn(/* props */) {
  const { filters } = useContext(FiltersContext);
  const { filterByNumericValues } = filters;

  return (
    <form>
      {/* <label>
          Pick your favorite flavor: */}
      <select
        data-testid="column-filter"
        value={ filterByNumericValues.column }
        onChange={ ({ target }) => filterByNumericValues
          .setNumericValuesFilter({ ...filterByNumericValues, column: target.value }) }
      >
        {columnOptions.map((column) => (
          <option key={ column } value={ column }>
            {column}
          </option>
        ))}
      </select>
      {/* </label> */}
    </form>
  );
}

export default FilterByColumn;
