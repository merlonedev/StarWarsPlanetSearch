import PropTypes from 'prop-types';
import React from 'react';
import useFilter from '../hooks/useFilter';

function Filter({ planets, setPlanets }) {
  const setFilters = useFilter(planets, setPlanets)[1];

  function handleChange({ target }) {
    const { value: name } = target;
    setFilters({ filterByName: { name } });
  }

  return (
    <form>
      <label htmlFor="name">
        {'Nome: '}
        <input type="text" id="name" onChange={ (e) => handleChange(e) } />
      </label>
    </form>
  );
}

Filter.propTypes = {
  planets: PropTypes.arrayOf().isRequired,
  setPlanets: PropTypes.func.isRequired,
};

export default Filter;
