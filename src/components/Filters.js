import React, { useContext } from 'react';
import Context from '../context/Context';

function Filters() {
  const { filters, setFilters } = useContext(Context);
  return (
    <input
      type="text"
      value={ filters.filterByName.name }
      data-testid="name-filter"
      onChange={ (event) => setFilters(
        { ...filters, filterByName: { name: event.target.value } },
      ) }
    />
  );
}

export default Filters;
