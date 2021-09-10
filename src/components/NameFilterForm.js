import React, { useContext } from 'react';
import contextTable from '../context/contextTable';
import Input from './Input';

const NameFilterForm = () => {
  const { setFilters, filters } = useContext(contextTable);

  const handleChangeName = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  return (
    <form>
      <div>
        <Input
          inputType="text"
          placeholder="Nome do planeta"
          value={ filters.filterByName.name }
          onChange={ handleChangeName }
          name="planet"
          testId="name-filter"
        />
      </div>
    </form>
  );
};

export default NameFilterForm;
