import React, { useState } from 'react';

function InputFilterValue() {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value: filterValue } }) => setValue(filterValue);

  return (
    <label htmlFor="value-filter">
      valor filtrado:
      <input
        data-testid="value-filter"
        id="value"
        type="number"
        name="value"
        value={ value }
        onChange={ handleChange }
      />
    </label>
  );
}

export default InputFilterValue;
