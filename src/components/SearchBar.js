import React, { useState, useContext } from 'react';
import PlanetListContext from '../contexts/PlanetListContext';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import { categoryOptions, conditionOptions } from '../helpers/Options';

function SearchBar() {
  const [filters, setFilters] = useState({ column: '', comparison: '', value: '' });

  const { nameFilter, numericFilter } = useContext(PlanetListContext);

  const handleChange = (e) => {
    const { target: { value, id } } = e;
    switch (id) {
    case 'name-filter':
      return nameFilter(value);
    case 'category-selector':
      return (
        setFilters(
          { ...filters, column: value },
        )
      );
    case 'condition':
      return (
        setFilters(
          { ...filters, comparison: value },
        )
      );
    case 'filter-value':
      return (
        setFilters(
          { ...filters, value },
        )
      );
    default:
      console.log(value);
    }
  };

  const handleClick = () => {
    numericFilter(filters);
  };

  return (
    <>
      <h3>Pesquisar</h3>
      <Input
        testID="name-filter"
        id="name-filter"
        name="Nome"
        onChange={ handleChange }
      />
      <Select
        testID="column-filter"
        id="category-selector"
        options={ categoryOptions }
        onChange={ handleChange }
      />
      <Select
        testID="comparison-filter"
        id="condition"
        options={ conditionOptions }
        onChange={ handleChange }
      />
      <Input
        testID="value-filter"
        id="filter-value"
        name="Valor"
        onChange={ handleChange }
      />
      <Button
        testID="button-filter"
        type="button"
        id="filter-button"
        name="Filtrar"
        onClick={ handleClick }
      />
    </>
  );
}

export default SearchBar;
