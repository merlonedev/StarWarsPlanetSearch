import React, { useContext } from 'react';
import { FiltersContext } from '../context';

function FiltersButton() {
  const { filters } = useContext(FiltersContext);
  const { isFilterActive, setIsFilterActive } = filters;
  return (
    <button
      data-testid="button-filter"
      type="button"
      onClick={ () => { setIsFilterActive(!isFilterActive); } }
    >
      Toggle Filter
    </button>
  );
}

export default FiltersButton;
