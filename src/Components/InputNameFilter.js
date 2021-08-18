import React, { useContext } from 'react';
import Context from '../ContextStuff/Context';

export default function InputNameFilter() {
  const { filters, setFilters } = useContext(Context);

  function updateFilterName({ target: { value } }) {
    setFilters({
      ...filters,
      filterByName: { name: value },
    });
  }

  return (
    <label htmlFor="name-filter">
      Filtrar pelo nome
      <input
        data-testid="name-filter"
        name="filterName"
        onChange={ updateFilterName }
      />
    </label>
  );
}
