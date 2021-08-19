import React, { useContext } from 'react';
import { shape, string } from 'prop-types';
import StarContext from '../context/StarContext';

function ResetBtn({ filter }) {
  const { filters, setFilters } = useContext(StarContext);

  function resetFilters() {
    const { filterByNumericValues } = filters;
    console.log(filterByNumericValues);
    setFilters({
      ...filters,
      filterByNumericValues: filterByNumericValues.filter((f) => f !== filter),
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

ResetBtn.propTypes = {
  filter: shape({
    column: string,
    comparison: string,
    value: string,
  }).isRequired,
};
