import React, { useContext } from 'react';
import contextTable from '../context/contextTable';
import Input from './Input';

const Filters = () => {
  const { setFilters, filters } = useContext(contextTable);
  const handleChangeInput = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  return (
    <div>
      <Input
        inputType="text"
        placeholder="Planet name"
        value={ filters.filterByName.name }
        onChange={ handleChangeInput }
        testId="name-filter"
      />
    </div>
  );
};

export default Filters;
