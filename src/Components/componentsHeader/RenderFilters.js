import React from 'react';
import { string, objectOf, arrayOf, func } from 'prop-types';

function RenderFilters({ filters, handleClick }) {
  return (
    <>
      {filters.map(({ column, comparison, value }, index) => (
        <div
          data-testid="filter"
          key={ index }
        >
          <p>{ column }</p>
          <p>{ comparison }</p>
          <p>{ value }</p>
          <button
            type="button"
            onClick={ () => handleClick(column) }
          >
            X
          </button>
        </div>
      ))}
    </>
  );
}

RenderFilters.propTypes = {
  filters: arrayOf(objectOf(string)).isRequired,
  handleClick: func.isRequired,
};

export default RenderFilters;
