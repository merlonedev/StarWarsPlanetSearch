import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FiltersContext } from '../context';

function Filter(props) {
  const { filter } = props;
  const { column, comparison, value } = filter;
  const { filters } = useContext(FiltersContext);
  return (
    <div data-testid="filter">
      <div>
        {column}
      </div>
      <div>
        {comparison}
      </div>
      <div>
        {value}
      </div>
      <button
        type="button"
        onClick={ () => filters.removeFilter(filter) }
      >
        X
      </button>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.shape({
    column: PropTypes.string.isRequired,
    comparison: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default Filter;
