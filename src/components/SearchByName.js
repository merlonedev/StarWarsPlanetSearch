import React from 'react';
import PropTypes from 'prop-types';

function SearchByName(props) {
  const { name, setName } = props;
  const handleChange = ({ target }) => {
    setName(target.value);
  };

  return (
    <input
      type="text"
      data-testid="name-filter"
      value={ name }
      onChange={ handleChange }
      placeholder="Insert planet name"
    />
  );
}

SearchByName.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
};

export default SearchByName;
