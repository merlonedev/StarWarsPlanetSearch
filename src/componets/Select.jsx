import React from 'react';
import PropTypes from 'prop-types';

function Select(props) {
  const { htmlFor, options, testid, onClick,
    value } = props;

  return (
    <div>
      <label htmlFor={ htmlFor }>
        <select
          name={ htmlFor }
          id={ htmlFor }
          data-testid={ testid }
          value={ value }
          onChange={ onClick }
        >
          {
            options.map((item) => (
              <option key={ item } value={ item }>{item}</option>))
          }
        </select>
      </label>
    </div>
  );
}

Select.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Select;
