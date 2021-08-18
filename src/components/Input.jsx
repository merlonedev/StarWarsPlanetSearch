import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';

function Input({ name, testId }) {
  const { handleChange } = useContext(MyContext);
  return (
    <input
      data-testid={ testId }
      type="text"
      name={ name }
      onChange={ handleChange }
    />
  );
}

Input.propTypes = {
  name: PropTypes.string,
  testId: PropTypes.string,
}.isRequired;

export default Input;
