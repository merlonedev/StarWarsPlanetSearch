import React from 'react';
import PropTypes from 'prop-types';

export default function Select({
  handleChange,
  name,
  text,
  testId,
  optionList,
}) {
  return (
    <label htmlFor={ name }>
      { text }
      <select
        data-testid={ testId }
        onChange={ handleChange }
        name={ name }
      >
        { optionList.map((myOption, index) => (
          <option
            key={ index }
            value={ myOption.value }
            disabled={ myOption.disabled }
          >
            { myOption.value }
          </option>
        ))}
      </select>
    </label>
  );
}

Select.defaultProps = {
  text: '',
  testId: 'none',
  optionList: null,
  handleChange: null,
};

Select.propTypes = {
  testId: PropTypes.string,
  handleChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
  optionList: PropTypes.shape({
    value: PropTypes.string,
    disabled: PropTypes.bool,
    map: PropTypes.func,
  }),
};
