import PropTypes from 'prop-types';
import React from 'react';

function Apply({ handleClick }) {
  return (
    <button type="button" data-testid="button-filter" onClick={ handleClick }>
      Apply
    </button>
  );
}

Apply.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Apply;
