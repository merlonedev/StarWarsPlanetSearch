import React, { useState } from 'react';
import PropTypes from 'prop-types';

function DisabledForm({ column, comparison, value, onDelete }) {
  const [visible, setVisible] = useState(true);

  const deleteFilter = () => {
    setVisible(false);
    onDelete();
  };

  return (
    visible
      && (
        <div data-testid="filter">
          <span>
            { column }
          </span>
          <span>
            { comparison }
          </span>
          <span>
            { value }
          </span>
          <button
            onClick={ deleteFilter }
            type="button"
          >
            X
          </button>
        </div>
      )
  );
}

DisabledForm.propTypes = {
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DisabledForm;
