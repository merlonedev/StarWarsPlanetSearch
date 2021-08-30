import React, { useContext } from 'react';
import MyContext from '../../context';

const FilterName = () => {
  const { filters, setFilter } = useContext(MyContext);
  const { filterByName: { name } } = filters;

  const handleInput = ({ target: { value } }) => {
    setFilter({
      ...filters,
      filterByName: {
        name: value,
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
