import React, { useState } from 'react';
import { useProvider } from '../context/Provider';

function FilterByNumber() {
  const [colFilters, setColFilters] = useState([
    'rotation_period',
    'orbital_period',
    'diameter',
    'surface_water',
    'population',
  ]);

  const { filters, setFilters } = useProvider();

  const [localFilters, setLocalFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  function handleColumnFilter({ target: { value } }) {
    setLocalFilters({
      ...localFilters,
      column: value,
    });
  }

  function FilterOption() {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, localFilters],
    });
    const newFilters = [];
    const optionColFilter = colFilters.filter((col) => (
      col !== localFilters.column
    ));

    optionColFilter.forEach((col) => {
      newFilters.push(col);
    });

    setColFilters(newFilters);
    const event = {
      target: { value: newFilters[0] },
    };
    handleColumnFilter(event);
  }

  return (
    <div>
      <select
        onChange={ (event) => handleColumnFilter(event) }
        data-testid="column-filter"
      >
        { colFilters.map((filColumn, index) => (
          <option key={ index }>{filColumn}</option>
        ))}
      </select>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ FilterOption }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterByNumber;
