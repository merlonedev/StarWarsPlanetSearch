import React from 'react';
import PropTypes from 'prop-types';

function renderOptions(options) {
  return (
    options.map((option) => (
      <option key={ option } value={ option }>{option}</option>
    ))
  );
}

function Select(
  {
    id,
    value,
    onChange,
    text,
    className,
    name,
    options,
  },
) {
  return (
    <label htmlFor={ id }>
      {text}
      <select
        id={ id }
        data-testid={ id }
        value={ value }
        onChange={ onChange }
        className={ className }
        name={ name }
      >
        {renderOptions(options)}
      </select>
    </label>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Select.defaultProps = {
  text: '',
  className: '',
};

export default Select;
