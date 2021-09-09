import React, { useContext, useEffect, useState } from 'react';
import ContextApi from '../context/ContextApi';
import Input from './Input';

function FilterByName() {
  const { data, filters, setFilters, setDataFilter } = useContext(ContextApi);
  // const { filterByName: { name } } = filters;
  const [name, setName] = useState('');

  const handleChange = ({ target: { value } }) => {
    setName(value);
  };

  useEffect(() => {
    const check = name !== filters.filterByName.name;
    if (check) {
      setFilters({ ...filters, filterByName: { name } });
      const aux = [...data];
      const newAux = aux.filter((i) => i.name.toLowerCase().includes(name));
      setDataFilter(newAux);
    }
  }, [data, name, setFilters, filters, setDataFilter]);

  return (
    <Input
      textlabel="Planeta"
      id="name-filter"
      type="search"
      value={ name }
      onChange={ handleChange }
    />

  );
}

export default FilterByName;
