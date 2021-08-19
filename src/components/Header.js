import React from 'react';
import { useFilter } from '../context/DataContext';
import Input from './Input';

export default function Header() {
  const { filters, setFilterByName } = useFilter();

  const handleChange = ({ target: { value } }) => {
    setFilterByName(value);
  };

  const { filterByName: { name } } = filters;
  return (
    <header>
      <Input
        type="text"
        name="name-filter"
        testId="name-filter"
        holder="Filtre por nome"
        onChange={ handleChange }
        value={ name }
      />
    </header>
  );
}
