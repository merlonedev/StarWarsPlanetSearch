import React, { useContext, useEffect } from 'react';
import ContextApi from '../context/ContextApi';
import Input from './Input';

function FilterByName() {
  const { data, filters, setFilters, setDataFilter } = useContext(ContextApi);
  const { filterByName: { name } } = filters;

  const handleChange = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value } });
  };

  useEffect(() => {
    const planetByName = () => {
      const { filterByName } = filters;
      const aux = [...data];
      // console.log(allData);
      setDataFilter(aux.filter((i) => i.name.toLowerCase().includes(filterByName.name)));
    };
    planetByName();
  }, [data, filters, setDataFilter]);

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
