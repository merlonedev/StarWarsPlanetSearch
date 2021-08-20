import React, { useContext } from 'react';
import Context from '../../context/Context';

function InputFilterValue() {
  const { value, setValue } = useContext(Context);

  const handleChange = ({ target: { value: filterValue } }) => setValue(filterValue);

  return (
    <label htmlFor="value-filter">
      Valor do Filtro:
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
