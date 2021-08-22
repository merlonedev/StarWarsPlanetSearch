import React from 'react';
import PropTypes from 'prop-types';
import options from '../data';
import './Filter.css';

const OrderFilter = ({ column, sort, handleChange, handleClickOrder }) => (
  <div className="order-sort-container">
    <label htmlFor="column-sort" className="column-sort-label">
      <select
        className="column-sort"
        id="column-sort"
        data-testid="column-sort"
        name="column-sort"
        value={ column }
        onChange={ handleChange }
      >
        { options.allColumns.map((sortColumn, index) => (
          <option key={ index } value={ sortColumn.name }>{sortColumn.name}</option>
        )) }
      </select>
    </label>
    <div className="radio-container">
      <label htmlFor="asc" className="asc-label">
        <input
          type="radio"
          value="ASC"
          id="asc"
          name="asc"
          data-testid="column-sort-input-asc"
          className="asc-radio"
          checked={ sort === 'asc' }
          onChange={ handleChange }
        />
        Ascendente
      </label>
      <label htmlFor="desc" className="desc-label">
        <input
          type="radio"
          value="DESC"
          id="desc"
          name="desc"
          data-testid="column-sort-input-desc"
          className="desc-radio"
          checked={ sort === 'desc' }
          onChange={ handleChange }
        />
        Descendente
      </label>
    </div>
    <button
      type="button"
      data-testid="column-sort-button"
      className="button-sort"
      onClick={ handleClickOrder }
    >
      Ordenar
    </button>
  </div>
);

OrderFilter.propTypes = {
  column: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClickOrder: PropTypes.func.isRequired,
};

export default OrderFilter;
