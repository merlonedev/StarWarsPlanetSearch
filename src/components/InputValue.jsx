import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';

function InputValue({ name, testId, type }) {
  const { handleChangeColumn } = useContext(MyContext);
  return (
    <input
      data-testid={ testId }
      type={ type }
      name={ name }
      onChange={ handleChangeColumn }
    />
  );
}

InputValue.propTypes = {
  name: PropTypes.string,
  testId: PropTypes.string,
}.isRequired;

export default InputValue;
