import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterName() {
  const { filters, setFilters } = useContext(MyContext);
  const { filterByName: { name } } = filters;

  const onChange = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
    console.log(name);
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        value={ name }
        onChange={ onChange }
      />
    </div>
  );
}

export default FilterName;
