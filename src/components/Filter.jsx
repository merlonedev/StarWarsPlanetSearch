import React, { useContext } from 'react';
import MyContext from '../context/Context';

function Table() {
  const { filters, setFilters } = useContext(MyContext);
  return (
    <header>
      <label htmlFor="filter">
        Filter
        <input
          type="text"
          name="filter"
          data-testid="name-filter"
          onChange={ ({ target: { value } }) => setFilters({
            ...filters,
            filterByName: {
              name: value,
            },
          }) }
        />

      </label>
    </header>
  );
}
export default Table;
