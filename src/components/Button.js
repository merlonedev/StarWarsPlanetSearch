import React from 'react';
import PropTypes from 'prop-types';

function Button({ id, name, onClick, testID }) {
  return (
    <button
      type="button"
      id={ id }
      data-testid={ testID }
      onClick={ onClick }
    >
      { name }
    </button>
  );
}

const { string, func } = PropTypes;
Button.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  testID: string,
  onClick: func.isRequired,
};

Button.defaultProps = {
  testID: '',
};

export default Button;
