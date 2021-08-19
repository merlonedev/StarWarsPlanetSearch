import React, { useContext } from 'react';
import Context from '../context/Context';

function InputFilter() {
  const { filters, setFilters } = useContext(Context);
  const { filterByName: { name } } = filters;
  // console.log(filters);

  function handleChange({ target: { value } }) {
    setFilters({
      ...filters,
      filterByName: { name: value },
    });
  }

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        name="name"
        value={ name }
        onChange={ handleChange }
        placeholder="Planet name"
      />
    </div>
  );
}

export default InputFilter;
