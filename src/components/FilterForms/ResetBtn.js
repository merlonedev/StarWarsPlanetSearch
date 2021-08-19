import React, { useContext } from 'react';
import StarContext from '../../context/StarContext';

function ResetBtn() {
  const { filters, setFilters, columnsOpts, setColumnsOpts } = useContext(StarContext);

  function resetFilters() {
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: '',
        },
      ],
    });
  }

  return (
    <button
      data-testid="filter"
      // className="btn btn-primary"
      type="button"
      onClick={ resetFilters }
    >
      X
    </button>
  );
}

export default ResetBtn;
