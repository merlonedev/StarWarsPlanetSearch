import React from 'react';

import Apply from './Apply';
import Input from './Input';
import Select from './Select';
import { Context } from '../Provider';

function Filter() {
  const { Filter: [filters, setFilters] } = useContext(Context);

  function handleChange(value, id) {
    if (id === 'name') {
      setFilters({ ...filters, filterByName: { name: value } });
    } else if (/column|comparison|value/.test(id)) {
      setFilters({
        ...filters,
        filterByNumericValues: [
          ...filters.filterByNumericValues,
          { [id]: value },
        ],
      });
    } else {
      setFilters(filters);
    }
  }

  return (
    <form>
      <fieldset>
        <Input id="name" handleChange={ handleChange } />
      </fieldset>
      <fieldset>
        <Select id="column" handleChange={ handleChange }>
          <option value="population">População</option>
          <option value="orbital_period">Período Orbital</option>
          <option value="diameter">Diâmetro</option>
          <option value="rotation_period">Período de Rotação</option>
          <option value="surface_water">Água da Superfície</option>
        </Select>
        <Select id="comparison" handleChange={ handleChange }>
          <option value="maior que">{'>'}</option>
          <option value="menor que">{'<'}</option>
          <option value="igual a">=</option>
        </Select>
        <Input id="value" handleChange={ handleChange } type="number" />
        <Apply />
      </fieldset>
    </form>
  );
}

export default Filter;
