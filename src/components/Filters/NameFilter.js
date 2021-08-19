import React from 'react';
import PropTypes from 'prop-types';

function NameFilter(props) {
  const { handleChangeFilters } = props;
  return (
    <label htmlFor="name-planet">
      Planet Name
      <input
        type="text"
        id="name-planet"
        name="planetName"
        onChange={ handleChangeFilters }
        data-testid="name-filter"
      />
    </label>
  );
}

NameFilter.propTypes = {
  handleChangeFilters: PropTypes.func.isRequired,
};

export default NameFilter;
