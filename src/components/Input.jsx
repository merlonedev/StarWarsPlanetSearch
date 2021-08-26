import React from 'react';
import { string, func, number } from 'prop-types';

export default function Input({
  id,
  onChange,
  name,
  type,
  value,
  textlabel,
}) {
  return (
    <label
      htmlFor={ id }
    >

      { textlabel }

      <input
        data-testid={ id }
        name={ name }
        id={ id }
        type={ type }
        value={ value }
        onChange={ onChange }
      />

    </label>
  );
}

Input.propTypes = {
  id: string.isRequired,
  name: string,
  onChange: func.isRequired,
  type: string.isRequired,
  value: string || number,
  textlabel: string,
};

Input.defaultProps = {
  name: '',
  value: '',
  textlabel: '',
};
