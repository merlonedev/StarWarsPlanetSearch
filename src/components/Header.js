import React, { useState } from 'react';
import { useFilter } from '../context/DataContext';
import Button from './Button';
import Input from './Input';
import Select from './Select';

const FILTER_OP = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
const INITIAL_STATE = { column: 'population', comparison: 'maior que', value: 0 };
const INITIAL_SORT = { column: 'population', sort: 'ASC' };

export default function Header() {
  const { filters, setFilters } = useFilter();
  const [filterOp, setFilterOp] = useState(FILTER_OP);
  const [filterByNumeric, setFilterByNumeric] = useState(INITIAL_STATE);
  const [order, setOrder] = useState(INITIAL_SORT);

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
      const newOptions = filterOp.filter((item) => item !== column);
      setFilterOp(newOptions);
      setFilterByNumeric({ ...filterByNumeric, column: newOptions[0], value: 0 });
    } else {
      setFilters((prev) => ({ ...prev, filterByNumericValues }));
      const newOptions = filterOp.filter((item) => item !== column);
      setFilterOp(newOptions);
      setFilterByNumeric({ ...filterByNumeric, column: newOptions[0], value: 0 });
    }
  };

  const remFilter = ({ target: { value } }) => {
    const { filterByNumericValues } = filters;
    const remFiltro = filterByNumericValues.filter(({ column }) => column !== value);
    setFilters((prev) => ({ ...prev, filterByNumericValues: remFiltro }));
    setFilterOp((prev) => [...prev, value]);
  };

  const handleOrder = ({ target: { name, value } }) => {
    setOrder((prev) => ({ ...prev, [name]: value }));
  };

  const orderSubmit = () => {
    setFilters((prev) => ({ ...prev, order }));
  };

  const { filterByName: { name } } = filters;
  const { column, comparison, value } = filterByNumeric;
  const { filterByNumericValues } = filters;
  const { column: sColumn, sort } = order;
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
        options={ filterOp }
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
      <div>
        {filterByNumericValues && (
          filterByNumericValues.map((item) => (
            <ul key={ item.column } data-testid="filter">
              <li>
                {JSON.stringify(Object.values(item))}
                <Button
                  type="button"
                  label="X"
                  value={ item.column }
                  onClick={ remFilter }
                />
              </li>
            </ul>
          ))
        )}
      </div>
      <Select
        testId="column-sort"
        name="column"
        id="column"
        label="Order by: "
        onChange={ handleOrder }
        options={ filterOp }
        value={ sColumn }
      />
      <Input
        type="radio"
        label="ASC"
        testId="column-sort-input-asc"
        name="sort"
        onChange={ handleOrder }
        value="ASC"
        checked={ sort === 'ASC' }
      />
      <Input
        type="radio"
        label="DESC"
        testId="column-sort-input-desc"
        name="sort"
        onChange={ handleOrder }
        value="DESC"
        checked={ sort === 'DESC' }
      />
      <Button
        type="button"
        label="ok"
        testId="column-sort-button"
        onClick={ orderSubmit }
      />
    </header>
  );
}
