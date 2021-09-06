import React, { useContext } from 'react';

import { FiltersContext } from '../context';

function FilterByColumn() {
  const { filters } = useContext(FiltersContext);
  const { column, setColumn, columnOptions } = filters;

  return (
    <form>
      <label
        htmlFor="column-filter"
      >
        Column:
        <select
          id="column-filter"
          data-testid="column-filter"
          value={ column }
          onChange={ ({ target }) => {
            setColumn(target.value);
          } }
        >
          {columnOptions.map((columnOption) => (
            <option key={ columnOption } value={ columnOption }>
              {columnOption}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
}

export default FilterByColumn;
