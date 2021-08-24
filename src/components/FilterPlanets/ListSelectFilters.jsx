import React from 'react';
import PropTypes from 'prop-types';

function ListSelectFilters({ selectedFilters, removeNumericFilter }) {
  return (selectedFilters.length ? (
    <ul>
      {selectedFilters.map((filter) => (
        <li
          data-testid="filter"
          key={ `filter ${filter.column}` }
        >
          {JSON.stringify(filter)}
          <button
            id={ filter.column }
            onClick={ removeNumericFilter }
            type="button"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  ) : '');
}

ListSelectFilters.propTypes = {
  selectedFilters: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeNumericFilter: PropTypes.func.isRequired,
};

export default ListSelectFilters;
