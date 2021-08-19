import React, { useState } from 'react';
import { useFilter } from '../context/DataContext';
import Button from './Button';
import Input from './Input';
import Select from './Select';

let FILTER_OP = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
const INITIAL_STATE = { column: 'population', comparison: 'maior que', value: 0 };

export default function Header() {
  const { filters, setFilters } = useFilter();
  const [filterByNumeric, setFilterByNumeric] = useState(INITIAL_STATE);

  const handleChange = ({ target: { value } }) => {
    value = value.toLowerCase();
    setFilters((prev) => ({ ...prev, filterByName: { name: value } }));
  };

  const handleOption = ({ target: { name, value } }) => {
    setFilterByNumeric((prev) => ({ ...prev, [name]: value }));
  };

  const addToContext = () => {
    const filterByNumericValues = [filterByNumeric];
    const { column } = filterByNumeric;
    if (filters.filterByNumericValues) {
      setFilters((prev) => (
        { ...prev,
          filterByNumericValues: [...prev.filterByNumericValues, filterByNumeric] }
      ));
      FILTER_OP = FILTER_OP.filter((item) => item !== column);
    } else {
      setFilters((prev) => ({ ...prev, filterByNumericValues }));
      FILTER_OP = FILTER_OP.filter((item) => item !== column);
    }
  };

  const { filterByName: { name } } = filters;
  const { column, comparison, value } = filterByNumeric;
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
      <Select
        testId="column-filter"
        name="column"
        id="column"
        label="Filter by: "
        onChange={ handleOption }
        options={ FILTER_OP }
        value={ column }
      />
      <Select
        testId="comparison-filter"
        name="comparison"
        id="comparison"
        onChange={ handleOption }
        options={ ['maior que', 'menor que', 'igual a'] }
        value={ comparison }
      />
      <Input
        type="number"
        testId="value-filter"
        name="value"
        id="value"
        onChange={ handleOption }
        value={ value }
      />
      <Button
        label="add"
        testId="button-filter"
        onClick={ addToContext }
      />
    </header>
  );
}
