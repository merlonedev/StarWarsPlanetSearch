import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

const SelectedColumns = ({ filters, handleClickRemove }) => (
  <div className="values-container">
    { filters.filterByNumericValues.map((numericFilter, index) => (
      <div
        className="value-container"
        id={ `value-container-${index}` }
        key={ index }
        data-testid="filter"
      >
        <span
          className="numeric-value-filter"
          id={ `numeric-value-filter-${index}` }
        >
          { `{"column":"${numericFilter.column}","comparison":"`
                + `${numericFilter.comparison}","value":${numericFilter.value}}` }
        </span>
        <button
          type="button"
          className="numeric-value-remove"
          id={ `${numericFilter.column}` }
          onClick={ handleClickRemove }
        >
          x
        </button>
      </div>
    ))}
  </div>
);

SelectedColumns.propTypes = {
  filters: PropTypes.shape().isRequired,
  handleClickRemove: PropTypes.func.isRequired,
};

export default SelectedColumns;
