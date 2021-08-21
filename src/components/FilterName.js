import React, { useContext } from 'react';
import myContext from '../context/myContext';
// import useData from '../hooks/useData';

function FilterNameInput() {
  const { filters, setFilters } = useContext(myContext);

  const handleChange = (value) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={ ({ target }) => handleChange(target.value) }
    />
  );
}

export default FilterNameInput;
