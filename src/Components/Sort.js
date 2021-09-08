import React from 'react';
import PropTypes from 'prop-types';

function Sort({ SortColumns, sortColumn, handleInputSort, handleClickSort, sort }) {
  return (
    <div className="sort-inputs">
      <select
        data-testid="column-sort"
        name="column"
        value={ sortColumn }
        onChange={ handleInputSort }
      >
        { SortColumns.map((columnOpt) => (
          <option key={ columnOpt } value={ columnOpt }>{ columnOpt }</option>
        )) }
      </select>
      <label htmlFor="sort-input-asc">
        Ascending
        <input
          id="sort-input-asc"
          data-testid="column-sort-input-asc"
          type="radio"
          name="sort"
          value="ASCEND"
          checked={ sort === 'ASCEND' }
          onChange={ handleInputSort }
        />
      </label>
      <label htmlFor="sort-input-desc">
        Descending
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          name="sort"
          value="DESCEND"
          checked={ sort === 'DESCEND' }
          onChange={ handleInputSort }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleClickSort }
      >
        Sort
      </button>
    </div>
  );
}

Sort.propTypes = {
  SortColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortColumn: PropTypes.string.isRequired,
  handleInputSort: PropTypes.func.isRequired,
  handleClickSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
};

export default Sort;
