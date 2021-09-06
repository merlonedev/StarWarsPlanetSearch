import React, { useContext } from 'react';

import { FiltersContext } from '../context';

function FilterByColumn() {
  const { filters } = useContext(FiltersContext);
  const { column, setColumn, availableColumns } = filters;

  return (
    <form>
      {/* <label>
          Pick your favorite flavor: */}
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
      >
        {availableColumns.map((columnOption) => (
          <option key={ columnOption } value={ columnOption }>
            {columnOption}
          </option>
        ))}
      </select>
      {/* </label> */}
    </form>
  );
}

export default FilterByColumn;
