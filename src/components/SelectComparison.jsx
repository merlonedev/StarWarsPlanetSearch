import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';

function SelectComparison({ testId, name }) {
  const { handleChangeColumn } = useContext(MyContext);

  return (
    <select
      name={ name }
      data-testid={ testId }
      onChange={ handleChangeColumn }
    >
      <option>maior que</option>
      <option>menor que</option>
      <option>igual a</option>
    </select>
  );
}

SelectComparison.propTypes = {
  name: PropTypes.string,
  testId: PropTypes.string,
}.isRequired;

export default SelectComparison;
