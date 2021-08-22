import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import Input from './Input';

function NameFilter() {
  const { filters: { filterByName: { name } }, setName } = useContext(MyContext);

  function handleChange({ target }) {
    setName(target.value);
  }

  return (
    <Input
      id="name-filter"
      labelName="Filtrar por nome"
      type="text"
      value={ name }
      onChange={ handleChange }
    />
  );
}

export default NameFilter;
