import React, { useContext } from 'react';
import { FiltersContext } from '../context';

function AddFilterButton() {
  const { filters } = useContext(FiltersContext);
  const { addFilter, handleColumnOptions, resetInputs } = filters;
  const handleClick = () => {
    addFilter();
    handleColumnOptions('add');
    resetInputs();
  };
  return (
    <button
      data-testid="button-filter"
      type="button"
      onClick={ handleClick }
    >
      Add Filter
    </button>
  );
}

export default AddFilterButton;
