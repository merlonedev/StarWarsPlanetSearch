import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';

function Button({ testId }) {
  const { handleClick } = useContext(MyContext);
  return (
    <button
      data-testid={ testId }
      type="button"
      onClick={ handleClick }
    >
      Adicionar Filtro
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  testId: PropTypes.string,
}.isRequired;

export default Button;
