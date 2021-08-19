import React, { useContext } from 'react';
import Context from '../context/Context';

function ButtonResetFilters() {
  const { setFilters, filters } = useContext(Context);
  const { filterByNumericValues } = filters;

  const handleResetFilter = () => {
    const resetFilter = filterByNumericValues
      .filter((_filter, index) => index !== filterByNumericValues.length - 1);
    setFilters({
      ...filters,
      filterByNumericValues: resetFilter,
    });
  };

  return (
    <div data-testid="filter">
      <button
        type="button"
        onClick={ handleResetFilter }
      >
        X
      </button>
    </div>
  );
}

export default ButtonResetFilters;
