import React from 'react';
import PropTypes from 'prop-types';

export default function Input(props) {
  const { type, name, label, onChange, value, id, testId, holder } = props;
  return (
    <label htmlFor={ name }>
      { label }
      <input
        type={ type }
        name={ name }
        value={ value }
        onChange={ onChange }
        id={ id }
        data-testid={ testId }
        placeholder={ holder }
      />
    </label>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  testId: PropTypes.string,
  holder: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  value: '',
  name: '',
  id: '',
  onChange: null,
  testId: '',
  holder: '',
};
