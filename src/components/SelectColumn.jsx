import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';

function SelectColumn({ testId, name }) {
  const { handleChangeColumn } = useContext(MyContext);

  return (
    <select
      name={ name }
      data-testid={ testId }
      onChange={ handleChangeColumn }
    >
      <option>population</option>
      <option>orbital_period</option>
      <option>diameter</option>
      <option>rotation_period</option>
      <option>surface_water</option>
    </select>
  );
}

SelectColumn.propTypes = {
  name: PropTypes.string,
  testId: PropTypes.string,
}.isRequired;

export default SelectColumn;
