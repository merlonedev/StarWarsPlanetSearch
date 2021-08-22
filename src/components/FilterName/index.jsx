import React, { useContext } from 'react';
import MyContext from '../../context';

const FilterName = () => {
  const { nameFilter, setNameFilter } = useContext(MyContext);
  const { filters: { filterByName: { name } } } = nameFilter;

  const handleInput = ({ target: { value } }) => {
    setNameFilter({
      ...nameFilter,
      filters: {
        ...nameFilter.filters,
        filterByName: {
          name: value,
        },
      },
    });
  };

  return (
    <div>
      <input
        placeholder="Filtra por nome"
        data-testid="name-filter"
        type="text"
        value={ name }
        onChange={ handleInput }
      />
    </div>
  );
};

export default FilterName;
