import React, { useContext } from 'react';
import Context from '../context/Context';

function InputFilterName() {
  const { filters, setFilters } = useContext(Context);
  const { filterByName } = filters;
  const { name } = filterByName;

  const handleChange = ({ target: { value } }) => {
    setFilters({
      ...filters, filterByName: { ...filterByName, name: value },
    });
  };

  return (
    <label htmlFor="filterName">
      filtre pelo nome do Planeta:
      <input
        data-testid="name-filter"
        id="filterName"
        type="text"
        name="name"
        value={ name }
        onChange={ handleChange }
      />
    </label>
  );
}

export default InputFilterName;
