import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FiltersContext } from '../context';

function Filter(props) {
  const { filter } = props;
  const { column, comparison, value } = filter;
  const { filters } = useContext(FiltersContext);
  const { removeFilter, handleColumnOptions, resetInputs } = filters;
  const handleClick = () => {
    removeFilter(filter);
    handleColumnOptions('remove', column);
    resetInputs();
  };
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
        onClick={ handleClick }
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
