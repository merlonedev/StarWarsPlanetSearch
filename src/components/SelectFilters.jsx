import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function SelectFilters() {
  const {
    filterByNumeric, handleNumericChanges, handleClickNumeric,
  } = useContext(Context);

  const [columns, setColumns] = useState(
    ['population', 'orbital_period',
      'diameter', 'rotation_period', 'surface_water'],
  );

  function handleClick() {
    handleClickNumeric(filterByNumeric);
    setColumns(columns.filter((col) => col !== filterByNumeric.column));
  }

  return (
    <div>
      <select
        id="column-filter"
        data-testid="column-filter"
        name="column"
        onChange={ handleNumericChanges }
        value={ filterByNumeric.column }
      >
        {columns.map((opt) => (
          <option key={ opt } value={ opt }>{ opt }</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        id="comparison-filter"
        name="comparison"
        onChange={ handleNumericChanges }
        value={ filterByNumeric.comparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        id="value-filter"
        data-testid="value-filter"
        name="value"
        onChange={ handleNumericChanges }
        value={ filterByNumeric.value }
      />
      <button
        onClick={ handleClick }
        data-testid="button-filter"
        type="button"
      >
        Filter
      </button>
    </div>
  );
}

export default SelectFilters;
