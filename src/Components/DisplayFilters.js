import React, { useContext } from 'react';
import Context from '../ContextStuff/Context';

export default function DisplayFilters() {
  const { filters, setFilters, setSystems,
    setOptions, data, initialOptions } = useContext(Context);

  function deleteFilter({ target }) {
    setFilters({
      ...filters,
      filterByNumericValues: filters.filterByNumericValues
        .filter(({ column }) => column !== target.value),
    });
    setSystems(data);
    setOptions(initialOptions);
  }

  return (
    <div>
      { filters.filterByNumericValues.map(({ column, comparison, value }) => (
        <div key={ column } data-testid="filter">
          <div>{`Filtro: ${column} > ${comparison} > ${value}`}</div>
          <button onClick={ deleteFilter } value={ column } type="button">X</button>
        </div>
      ))}
    </div>
  );
}
