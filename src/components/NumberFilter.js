import React from 'react';
import PropTypes from 'prop-types';
import options from '../data';
import './Filter.css';

const NumberFilter = ({ filterNumber, filterColumn, handleChange, handleClickAdd }) => (
  <div className="number-filter-container">
    <label htmlFor="column-filter" className="column-filter-label">
      <select
        className="column-filter"
        id="column-filter"
        data-testid="column-filter"
        name="column-filter"
        value={ filterNumber.column }
        onChange={ handleChange }
      >
        { filterColumn.map((option) => (
          <option key={ option.name } value={ option.name }>{ option.name }</option>
        )) }
      </select>
    </label>
    <label htmlFor="comparison-filter" className="comparison-filter-label">
      <select
        className="comparison-filter"
        id="comparison-filter"
        data-testid="comparison-filter"
        name="comparison"
        value={ filterNumber.comparison }
        onChange={ handleChange }
      >
        { options.comparisonFilter.map((option) => (
          <option key={ option.name } value={ option.name }>{ option.name }</option>
        )) }
      </select>
    </label>
    <label htmlFor="value-filter" className="value-filter-label">
      <input
        type="number"
        className="value-filter"
        id="value-filter"
        data-testid="value-filter"
        name="value"
        placeholder=""
        value={ filterNumber.value }
        onChange={ handleChange }
      />
    </label>
    <button
      type="button"
      data-testid="button-filter"
      className="button-filter"
      onClick={ handleClickAdd }
    >
      Adicionar filtro
    </button>
  </div>
);

NumberFilter.propTypes = {
  filterNumber: PropTypes.shape().isRequired,
  filterColumn: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClickAdd: PropTypes.func.isRequired,
};

export default NumberFilter;
