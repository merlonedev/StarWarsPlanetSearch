import React from 'react';
import { string, func, number } from 'prop-types';

// const comparisons = ['maior que', 'menor que', 'igual a'];

export default function Select({ id, onChange, value, textLabel }) {
  return (
    <label
      htmlFor={ id }
    >
      { textLabel }
      <select
        data-testid={ id }
        // name={ name }
        id={ id }
        value={ value }
        onChange={ onChange }
      >
        {
          // switch (id) {
          //   case 'column-filter':
          //     columns.map((option) => <option key={ option }>{option}</option>);
          //     break;
          //   case 'comparison-filter':
          //     comparisons.map((option) => <option key={ option }>{option}</option>);
          //     break;
          //   case 'value-filter':
          //     columns.map((option) => <option key={ option }>{option}</option>);
          //     break;
          //   default:
          //     break;
          // }
        }
      </select>

    </label>
  );
}

Select.propTypes = {
  id: string.isRequired,
  // name: string,
  onChange: func.isRequired,
  value: string || number,
  textLabel: string,
};

Select.defaultProps = {
  // name: '',
  value: '',
  textLabel: '',
};
