import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonText, onClick, testId }) => (
  <button
    type="button"
    onClick={ onClick }
    data-testid={ testId }
  >
    { buttonText }
  </button>
);

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
};

export default Button;
