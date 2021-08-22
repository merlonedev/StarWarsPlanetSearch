import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

const NameFilter = ({ filterName, handleChange }) => (
  <div className="name-filter-container">
    <label htmlFor="name-filter" className="name-filter-label">
      <input
        type="text"
        className="name-filter"
        id="name-filter"
        data-testid="name-filter"
        name="name"
        placeholder="Nome do planeta"
        value={ filterName }
        onChange={ handleChange }
      />
    </label>
  </div>
);

NameFilter.propTypes = {
  filterName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default NameFilter;
